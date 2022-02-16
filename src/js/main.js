import './_functions';

//sticky func

function throttle(fn, wait) {
  let time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now()
    }
  }
}

function checkScroll() {
  const offerHeight = document.querySelector(".offer").clientHeight;
  const scrolled = document.documentElement.scrollTop;
  const filtersBlockHeight = document.querySelector(".filters").offsetHeight;
  if (scrolled > offerHeight) {
    document.body.classList.add("sticky");
  } else {
    document.body.classList.remove("sticky");
  }
}

document.addEventListener("scroll", throttle(checkScroll, 100));

// render data from ***jsonFromServer***

const jsonFromServer = {
  hotels: [{
      id: 1,
      webp: 'img/image_1.webp',
      jpg: 'img/image_1.jpg',
      title: 'WestCord Fashion Hotel',
      city: 'Barcelona',
      rating: '3.5',
      description: 'Description could be small...',
      price: '129'
    },
    {
      id: 2,
      webp: 'img/image_2.webp',
      jpg: 'img/image_2.jpg',
      title: 'WestCord Fashion Hotel',
      city: 'Barcelona',
      rating: '2.0',
      description: ' Or very very long ..... Het trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laboriosam, accusamus!',
      price: '229'
    },
    {
      id: 3,
      webp: 'img/image_3.webp',
      jpg: 'img/image_3.jpg',
      title: 'WestCord Fashion Hotel',
      city: 'Barcelona',
      rating: '5.0',
      description: 'Or even a few words bla bla bla bla bla WestCord Fashion Hotel ...',
      price: '229'
    },
    {
      id: 4,
      webp: 'img/image_4.webp',
      jpg: 'img/image_4.jpg',
      title: 'WestCord Fashion Hotel',
      city: 'Barcelona',
      rating: '4.5',
      description: 'It won`t break the markup',
      price: '229'
    },
    {
      id: 5,
      webp: 'img/image_5.webp',
      jpg: 'img/image_5.jpg',
      title: 'WestCord Fashion Hotel',
      city: 'Barcelona',
      rating: '4',
      description: 'Het trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laboriosam, accusamus!',
      price: '229'
    },
    {
      id: 6,
      webp: 'img/image_6.webp',
      jpg: 'img/image_6.jpg',
      title: 'WestCord Fashion Hotel',
      city: 'Barcelona',
      rating: '5',
      description: 'Het trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laboriosam, accusamus!',
      price: '229'
    },
    {
      id: 7,
      webp: 'img/image_7.webp',
      jpg: 'img/image_7.jpg',
      title: 'WestCord Fashion Hotel',
      city: 'Barcelona',
      rating: '3.5',
      description: 'Het trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laboriosam, accusamus!',
      price: '229'
    },
    {
      id: 8,
      webp: 'img/image_8.webp',
      jpg: 'img/image_8.jpg',
      title: 'WestCord Fashion Hotel',
      city: 'Barcelona',
      rating: '3.3',
      description: 'Het trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laboriosam, accusamus!',
      price: '229'
    },
    {
      id: 9,
      webp: 'img/image_9.webp',
      jpg: 'img/image_9.jpg',
      title: 'WestCord Fashion Hotel',
      city: 'Barcelona',
      rating: '3.2',
      description: 'Het trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laboriosam, accusamus!',
      price: '229'
    },
    {
      id: 10,

      webp: 'img/image_10.webp',
      jpg: 'img/image_10.jpg',
      title: 'WestCord Fashion Hotel',
      city: 'Barcelona',
      rating: '4',
      description: 'Het trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laboriosam, accusamus!',
      price: '229'
    },
    {
      id: 11,
      webp: 'img/image_11.webp',
      jpg: 'img/image_11.jpg',
      title: 'WestCord Fashion Hotel',
      city: 'Barcelona',
      rating: '4',
      description: 'Het trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laboriosam, accusamus!',
      price: '229'
    },
    {
      id: 12,
      webp: 'img/image_12.webp',
      jpg: 'img/image_12.jpg',
      title: 'WestCord Fashion Hotel',
      city: 'Barcelona',
      rating: '4',
      description: 'Het trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laboriosam, accusamus!',
      price: '229'
    },
    {
      id: 13,
      webp: 'img/image_13.webp',
      jpg: 'img/image_13.jpg',
      title: 'WestCord Fashion Hotel',
      city: 'Barcelona',
      rating: '4',
      description: 'Het trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laboriosam, accusamus!',
      price: '229'
    },
    {
      id: 14,
      webp: 'img/image_14.webp',
      jpg: 'img/image_14.jpg',
      title: 'WestCord Fashion Hotel',
      city: 'Barcelona',
      rating: '4',
      description: 'Het trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolHet trendy WestCord Fashion Hotel Amsterdam ligt tegenover het World, en het...Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laboriosam, accusamus!',
      price: '229'
    },
  ]
};

const render = () => {
  const selector = document.querySelector('.hotels__list');
  for (let hotel of jsonFromServer.hotels) {
    const template = `
      <li>
        <article class = "card">
          <a href = "#" target="_blank" class = "card__img _ibg">
            <picture>
              <source srcset = "${hotel.webp}">
              <img src = "${hotel.jpg}" alt = "${hotel.title}">
            </picture>
          </a>
          <a href="#" target="_blank" class="card__city">${hotel.city}</a>
          <a href="#" target="_blank" class = "card__title">${hotel.title}</a>
           <div class = "star-rating" style = "--rating: ${hotel.rating};"> </div>
          <p class="card__description">${hotel.description}</p>
          <a href="#" target="_blank" class="card__price"> vanaf €<span>${hotel.price}</span> per nacht</a>
        </article>
      </li>
    `
    selector.innerHTML += template;
  }
}
render();
