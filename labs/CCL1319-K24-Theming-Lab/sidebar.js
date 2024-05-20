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
                'ex1/activity-1',
                'ex1/activity-2',
                'ex1/activity-3',
                'ex1/activity-4',
            ],
        },

        {
            type: 'category',
            label: 'Exercise 2',
            items: [
                'ex2/activity-1',
                'ex2/activity-2',
                'ex2/activity-3',
                'ex2/activity-4',
                'ex2/activity-5',

            ],
        },

        {
            type: 'category',
            label: 'Exercise 3',
            items: [
                'ex3/overview',
                'ex3/activity-1',
                'ex3/activity-2',
                'ex3/activity-3',
            ],
        },

        {
            type: 'category',
            label: 'Challenges',
            items: [
                'ex4/overview',
            ],
        },

    ],
};

module.exports = sidebars;
