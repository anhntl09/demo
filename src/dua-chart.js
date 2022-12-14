import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/plots';

export default () => {
    const columnData = [
        {
            name: 'London',
            month: 'Jan.',
            value: 12.9,
            type: 'School',
        },
        {
            name: 'London',
            month: 'Jan.',
            value: 10.9,
            type: 'Bus',
        },
        {
            name: 'London',
            month: 'Jan.',
            value: 120.9,
            type: 'Hospital',
        },
        {
            name: 'Berlin',
            month: 'Jan.',
            value: 12.4,
            type: 'Market',
        },
        {
            name: 'Berlin',
            month: 'Jan.',
            value: 12.4,
            type: 'Park',
        },
        {
            name: 'London',
            month: 'Feb.',
            value: 2.9,
            type: 'School',
        },
        {
            name: 'London',
            month: 'Feb.',
            value: 5.9,
            type: 'Bus',
        },
        {
            name: 'London',
            month: 'Feb.',
            value: 10.9,
            type: 'Hospital',
        },
        {
            name: 'Berlin',
            month: 'Feb.',
            value: 22.4,
            type: 'Market',
        },
        {
            name: 'Berlin',
            month: 'Feb.',
            value: 32.4,
            type: 'Park',
        },
        {
            name: 'London',
            month: 'Mar.',
            value: 2.9,
            type: 'School',
        },
        {
            name: 'London',
            month: 'Mar.',
            value: 5.9,
            type: 'Bus',
        },
        {
            name: 'Berlin',
            month: 'Mar.',
            value: 22.4,
            type: 'Market',
        },
        {
            name: 'Berlin',
            month: 'Mar.',
            value: 32.4,
            type: 'Park',
        },
    ];
    const lineData = [
        {
            name: 'Imp',
            month: 'Jan.',
            value: 12.9,
            type: 'Market',
        },
        {
            name: 'Cli',
            month: 'Jan.',
            value: 1.4,
            type: 'Park',
        },
        {
            name: 'Uni',
            month: 'Jan.',
            value: 2.4,
            type: 'f',
        },
        {
            name: 'Imp',
            month: 'Feb.',
            value: 18.9,
            type: 'Market',
        },
        {
            name: 'Cli',
            month: 'Feb.',
            value: 13.4,
            type: 'Park',
        },
        {
            name: 'Uni',
            month: 'Feb.',
            value: 15.4,
            type: 'f',
        },
        {
            name: 'Imp',
            month: 'Mar.',
            value: 8.9,
            type: 'Market',
        },
        {
            name: 'Cli',
            month: 'Mar.',
            value: 6.4,
            type: 'Park',
        },
        {
            name: 'Uni',
            month: 'Mar.',
            value: 5.4,
            type: 'f',
        },
    ];
    const config = {
        data: [columnData, lineData],
        xField: 'month',
        yField: ['value', 'value'],
        geometryOptions: [
            {
                geometry: 'column',
                isGroup: true,
                isStack: true,
                seriesField: 'type',
                groupField: 'name',
            },
            {
                geometry: 'line',
                seriesField: 'name',
                isStack: true,
                smooth: true,
            },
        ],
    };
    return <DualAxes {...config} />;
};

