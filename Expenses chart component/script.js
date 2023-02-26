"use strict";

const response = await fetch("./data.json"); 
const data = await response.json();

const chartEl = document.getElementById('chart');
const totalEl = document.getElementById('total');

const chartAdd = (chartEl, item) => chartEl.appendChild(item);

class ChartItem {
    constructor(day, amount){
        this.day = day;
        this.amount = amount;
    }
    create(){
        const item = document.createElement('div');
        const info = document.createElement('div');
        const cell = document.createElement('div');
        const rectangle = document.createElement('div');
        const header = document.createElement('span');
        
        const weekday = ["sun","mon","tue","wed","thu","fri","sat"];
        const date = new Date();
        const currentDay = weekday[date.getDay()];

        item.classList.add('chart-item');
        info.classList.add('chart-info');
        cell.classList.add('chart-cell');
        this.day === currentDay 
                    ? rectangle.classList.add('chart-rectangle', 'highlighted')
                    : rectangle.classList.add('chart-rectangle');
        header.classList.add('chart-header');
        
        item.style.height = this.amount + 10 + '%';

        info.innerText = this.amount;
        header.innerText = this.day;

        item.appendChild(info);
        item.appendChild(cell);
        cell.appendChild(rectangle);
        cell.appendChild(header);

        return item;
    }
}

const chartItemList = [];

data.forEach(el => {
    const item = new ChartItem(el.day, el.amount);
    const html = item.create();
    
    chartItemList.push(item);
    chartAdd(chartEl, html);
});

const totalSum = chartItemList.reduce((previousValue, currentValue) => previousValue + currentValue.amount, 0);
totalEl.innerText = `$${totalSum}`;