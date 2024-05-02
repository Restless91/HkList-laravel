<?php

use App\Http\Middleware\NeedCaptcha;
use App\Http\Middleware\NeedInstall;
use App\Http\Middleware\NeedPassword;
use App\Http\Middleware\RoleFilter;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\Routing\Middleware\ThrottleRequests;

return Application::configure(basePath: dirname(__DIR__))
                  ->withRouting(
                      web: __DIR__ . '/../routes/web.php',
                      api: __DIR__ . '/../routes/api.php',
                      commands: __DIR__ . '/../routes/console.php',
                      health: '/up',
                  )
                  ->withMiddleware(function (Middleware $middleware) {
                      $middleware->alias([
                          'RoleFilter'   => RoleFilter::class,
                          'NeedCaptcha'  => NeedCaptcha::class,
                          'NeedInstall'  => NeedInstall::class,
                          'NeedPassword' => NeedPassword::class,
                      ]);
                      $middleware->api(prepend: [
                          StartSession::class,
                          // 限制1分钟内请求不超过50次 超过就停用5分钟
                          ThrottleRequests::class . ':50,5'
                      ]);
                  })
                  ->withExceptions(function (Exceptions $exceptions) {
                      //
                  })->create();
