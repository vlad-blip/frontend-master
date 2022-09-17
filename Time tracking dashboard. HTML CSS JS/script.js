async function getData (url='./data.json'){
    const response = await fetch(url); 
    const data = await response.json();
    return data;
}
class DashboardItem {
    static PERIODS = {
        daily: 'Day',
        weekly: 'Week',
        monthly: 'Month'
    }

    constructor(data, container='.container', view="weekly"){
        this.data = data;
        this.container = document.querySelector(container);
        this.view = view;

        this.createItem();
    }
    createItem(){
        const {title, timeframes} = this.data;
        const {current, previous} = timeframes[this.view.toLocaleLowerCase()];
        const id = title.replace(' ', '-').toLocaleLowerCase();

        this.container.insertAdjacentHTML('beforeend', `
            <div id="${id}" class="stats">
                <div class="stats-content">
                    <div class="header">
                        <span class="heading">${title}</span>
                        <div class="btn-more">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="content">
                        <h2 class="hours">${timeframes[this.view].current}</h2>
                        <span class="last-hours">Last ${DashboardItem.PERIODS[this.view]} - ${timeframes[this.view].previous}</span>
                    </div>
                </div>
            </div>
        `);

        this.current = this.container.querySelector(`#${id} .hours`);
        this.previous = this.container.querySelector(`#${id} .last-hours`);
    }

    changeView(view){
        this.view = view;
        const {timeframes} = this.data;
        this.current.innerText = `${timeframes[this.view].current}`;
        this.previous.innerText = `Last ${DashboardItem.PERIODS[this.view]} - ${timeframes[this.view].previous}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const perioudButtons = document.querySelectorAll('.period-btn');

    getData()
        .then(data => {
            const activities = data.map(activity => new DashboardItem(activity));
            
            perioudButtons.forEach(btn => {
                btn.addEventListener('click', e => {
                    perioudButtons.forEach(btn => {
                        btn.dataset.active = 'false';
                    });

                    e.target.dataset.active = 'true';
                    const view = e.target.dataset.option;
                    
                    activities.forEach(item => {
                        item.changeView(view);
                    });
                })
            });
        });
});