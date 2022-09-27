async function getData (url='./data.json'){
    const response = await fetch(url); 
    const data = await response.json();
    return data;
}

class Section{
    constructor(data, technologyNum=0, container='.hero',){
        this.data = data['technology'];
        this.technologyNum = technologyNum;
        this.container = document.querySelector(container);
        this.picker = this._createPicker();
        this._createSection();
    }

    _createPicker(){
        const technologyList = this.data.map((technology, i) => 
        `
           <li><a href="#" class="page-1 page ${this.technologyNum === i ? 'page--active' : ''}" data-page="${i}">${++i}</a></li>
        `);
        const pickerFieldset = document.createElement('ul');
        pickerFieldset.className = 'slider';
        technologyList.forEach(technology => {
            pickerFieldset.insertAdjacentHTML('beforeend', technology);
        });
        return pickerFieldset;
    }

    _createSection(){
        const {name, images, description} = this.data[this.technologyNum];
        
        document.querySelector('.section-body') && document.querySelector('.section-body').remove();
        this.container.insertAdjacentHTML('beforeend', 
        `<div class="section-body">
            <div class="launch-wrapper">
                ${this._createPicker().outerHTML}
                <article class="launch-description">
                    <h4 class="heading-5">The terminology...</h4>
                    <h3 class="heading-3">${name}</h3>
                    <p class="body-text">${description}</p>
                </article>
            </div>
            <picture>
                <source srcset="${images.landscape}" media="(max-width:768px)" class="landscape">
                <img src="${images.portrait}" alt="${name}" class="vehicle-img portrait">
            </picture>
        </div>
      `);
      this.name = document.querySelector('.heading-3');
      this.description = document.querySelector('.body-text');
      this.image = {};
      this.image.landscape = document.querySelector('.landscape');
      this.image.portrait = document.querySelector('.portrait');
    }

    changeView(technologyNum){
        const technologyPicker = document.querySelectorAll(`.page`);
        technologyPicker.forEach(el => el.classList.remove('page--active'));
        
        this.technologyCurrent = document.querySelector(`[data-page='${technologyNum}']`);

        this.technologyCurrent.classList.add('page--active');

        const {name, images, description} = this.data[technologyNum];
        this.name.innerText = name;
        this.description.innerText = description;
        this.image.landscape.srcset = images.landscape;
        this.image.portrait.src = images.portrait;
    }

}

document.addEventListener('DOMContentLoaded', () => {
    getData()
        .then(data => {
            const section = new Section(data);
            const technologyPicker = document.querySelectorAll('.page');
            technologyPicker.forEach(technology => {
                technology.addEventListener('click', () => {
                    section.changeView(technology.dataset.page);
                });
            });
        });
});