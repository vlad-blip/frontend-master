async function getData (url='./data.json'){
    const response = await fetch(url); 
    const data = await response.json();
    return data;
}

class Section{
    static PLANETS = {
        'moon': 0,
        'mars': 1,
        'europa': 2,
        'titan': 3
    }

    constructor(data, planet='moon', container='.hero',){
        this.data = data['destinations'];
        this.planet = planet;
        this.container = document.querySelector(container);
        this.picker = this._createPicker();
        this._createSection();
    }

    _createPicker(){
        const planetList = this.data.map(dest => `
        <div class="picker-item">
            <input type="radio" id="${dest.name.toLowerCase()}" name="planet" value="${dest.name.toLowerCase()}">
            <label class="picker-btn ${dest.name.toLowerCase() === this.planet && 'picker-btn--active'}" for="${dest.name.toLowerCase()}">${dest.name}</label>
        </div>`);
        const pickerFieldset = document.createElement('fieldset');
        pickerFieldset.className = 'planet-picker';
        planetList.forEach(planet => {
            pickerFieldset.insertAdjacentHTML('beforeend', planet);
        });
        return pickerFieldset;
    }

    _createSection(){
        const {name, images, travel, distance, description} = this.data[Section.PLANETS[this.planet]];
        
        document.querySelector('.section-body') && document.querySelector('.section-body').remove();
        this.container.insertAdjacentHTML('beforeend', 
        `<div class="section-body">
            <img src="${images.webp}" alt="${name}" class="planet-img">
            <div class="section-description">
            ${this.picker.outerHTML}
            <article class="planet-description">
                <h2 class="heading-2">${name}</h2>
                <p class="body-text">${description}</p>
                <div class="divider"></div>
                <div class="remoteness">
                <div class="distance">
                    <h6 class="subheading-2">Avg. distance</h6>
                    <p class="subheading-1">${distance}</p>
                </div>
                <div class="travel-time">
                    <h6 class="subheading-2">Est. travel time</h6>
                    <p class="subheading-1">${travel}</p>
                </div>
                </div>
            </article>
            </div> 
        </div>
      `);
      this.image = document.querySelector('.planet-img');
      this.name = document.querySelector('.heading-2');
      this.description = document.querySelector('.body-text');
      this.distance = document.querySelector('.distance > .subheading-1');
      this.travel = document.querySelector('.travel-time > .subheading-1');
    }

    changeView(planet){
        const planetPicker = document.querySelectorAll(`.picker-btn`);
        planetPicker.forEach(el => el.classList.remove('picker-btn--active'));
        
        this.planetCurrent = document.querySelector(`[for=${planet}]`);

        this.planetCurrent.classList.add('picker-btn--active');

        const {name, images, travel, distance, description} = this.data[Section.PLANETS[planet]];
        
        this.image.src = images.webp;
        this.name.innerText = name;
        this.description.innerText = description;
        this.distance.innerText = distance;
        this.travel.innerText = travel;
    }

}

document.addEventListener('DOMContentLoaded', () => {
    getData()
        .then(data => {
            const section = new Section(data);

            const planetPicker = document.querySelectorAll('[name=planet]');
            planetPicker.forEach(planet => {
                planet.addEventListener('click', () => {
                    section.changeView(planet.value);
                });
            });
        });
});