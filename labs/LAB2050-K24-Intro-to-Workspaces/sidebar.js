// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    LAB2050K24: [
        
        'washington',
        'overview',

        {
            type: 'category',
            label: 'Exercise 1',
            items: [
                'ex1/overview',
                'ex1/activity-1',
                'ex1/activity-2',
                'ex1/activity-3',
                'ex1/activity-4',
                'ex1/activity-5',
                /*'ex1/review',*/
            ],
        },

        {
            type: 'category',
            label: 'Exercise 2',
            items: [
                'ex2/overview',
                'ex2/activity-1',
                'ex2/activity-2',
                'ex2/activity-3',
                /*'ex2/review',*/
            ],
        },

        {
            type: 'category',
            label: 'Exercise 3',
            items: [
                'ex3/overview',
                'ex3/activity-1',
                'ex3/activity-2',
                /*'ex3/review',*/
            ],
        },

        {
            type: 'category',
            label: 'Exercise 4',
            items: [
                'ex4/overview',
                'ex4/activity-1',
                /*'ex4/review',*/
            ],
        },

        {
            type: 'category',
            label: 'Exercise 5',
            items: [
                'ex5/overview',
                'ex5/activity-1',
                'ex5/activity-2',
                /*'ex5/activity-3',*/
                /*'ex5/review',*/
            ],
        },

        'review',

    ],
};

module.exports = sidebars;
