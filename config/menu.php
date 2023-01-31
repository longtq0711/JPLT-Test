<?php

return [
    'admin' => [
        [
            'icon' => '<i class="fe-users"></i>',
            'title' => 'ユーザ',
            'childs' => [
                [
                    'title' => 'リスト',
                    'route' => 'admin.users.index',
                ],
                [
                    'title' => '新規追加',
                    'route' => 'admin.users.create',
                ],
            ],
        ],
    ],
];
