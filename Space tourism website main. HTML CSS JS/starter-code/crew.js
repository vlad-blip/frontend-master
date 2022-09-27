async function getData (url='./data.json'){
    const response = await fetch(url); 
    const data = await response.json();
    return data;
}

class Section{
    static crewS = {
        'moon': 0,
        'mars': 1,
        'europa': 2,
        'titan': 3
    }

    constructor(data, crewNum=0, container='.hero',){
        this.data = data['crew'];
        this.crewNum = crewNum;
        this.container = document.querySelector(container);
        this.picker = this._createPicker();
        this._createSection();
    }

    _createPicker(){
        const crewList = this.data.map((member, i) => 
        `
            <li><a href="#" class="page-${i} page ${this.crewNum === i ? 'page--active' : ''}" data-page="${i}"></a></li>
        `);
        const pickerFieldset = document.createElement('ul');
        pickerFieldset.className = 'slider';
        crewList.forEach(crew => {
            pickerFieldset.insertAdjacentHTML('beforeend', crew);
        });
        return pickerFieldset;
    }

    _createSection(){
        const {name, images, role, bio} = this.data[this.crewNum];
        
        document.querySelector('.section-body') && document.querySelector('.section-body').remove();
        this.container.insertAdjacentHTML('beforeend', 
        `<div class="section-body">
            <div class="crew-wrapper">
            <article class="crew-description">
                <h4 class="heading-4">${role}</h4>
                <h3 class="heading-3">${name}</h3>
                <p class="body-text">${bio}</p>
            </article>
            ${this._createPicker().outerHTML}
            </div>
            <div class="img-wrapper">
                <img src="${images.webp}" alt="" class="crew-img">
            </div>
        </div>
      `);
      this.role = document.querySelector('.heading-4');
      this.name = document.querySelector('.heading-3');
      this.bio = document.querySelector('.body-text');
      this.image = document.querySelector('.crew-img');
    }

    changeView(crewNum){
        const crewPicker = document.querySelectorAll(`.page`);
        crewPicker.forEach(el => el.classList.remove('page--active'));
        
        this.crewCurrent = document.querySelector(`[data-page='${crewNum}']`);

        this.crewCurrent.classList.add('page--active');

        const {name, images, role, bio} = this.data[crewNum];

        this.role.innerText = role;
        this.name.innerText = name;
        this.bio.innerText = bio;
        this.image.src = images.webp;
    }

}

document.addEventListener('DOMContentLoaded', () => {
    getData()
        .then(data => {
            const section = new Section(data);
            const crewPicker = document.querySelectorAll('.page');
            crewPicker.forEach(crew => {
                crew.addEventListener('click', () => {
                    section.changeView(crew.dataset.page);
                });
            });
        });
});