<?php
namespace Deployer;

require 'recipe/laravel.php';

// Config

set('repository', 'git@github.com:ortzinator/jamar.git');

add('shared_files', ['.env']);
add('shared_dirs', ['storage']);
add('writable_dirs', ['storage']);

// Hosts

host('96.30.197.133')
    ->set('remote_user', 'jamar')
    ->set('deploy_path', '/var/www/sites/jamar');

// Tasks

task('build', function () {
    cd('{{release_path}}');
    run('npm run build');
});

after('deploy:failed', 'deploy:unlock');
