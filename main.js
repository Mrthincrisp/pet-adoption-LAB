let filterToggle = true

const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://people.com/thmb/5KDao-j60iIjmK-Ds1zgnjUuuas=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/t-rex-2000-fa6c6f21c38249b4995cbf21cb5fe5ed.jpg",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://www.harrisburgu.edu/wp-content/uploads/Sierraceratops-turneri-reconstruction-by-Sergey-Krasovskiy-1600x686.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://static.scientificamerican.com/sciam/cache/file/27164803-79FF-4555-B4F214AF9B8B829D_source.jpg?w=600"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://static01.nyt.com/images/2021/01/08/science/08TB-DINOSEED1/08TB-DINOSEED1-mediumSquareAt3X.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://i.redd.it/ixxwnw3ywreb1.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://www.thoughtco.com/thmb/QrNTgKCKzWpjX63sFmNTJaVWGU8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-73686338-58db448c5f9b58468328b48b.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://www.befunky.com/images/wp/wp-2013-08-featured1.png?auto=avif,webp&format=jpg&width=333&crop=16:9"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://i.cbc.ca/1.7046192.1701492097!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/african-wild-cat.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://i.etsystatic.com/7356601/r/il/fc70ac/4939994195/il_fullxfull.4939994195_1brz.jpg"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Sphynx.jpg?itok=XRBkheYL"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://media.wired.com/photos/636eb5510ae5a121565fd729/4:3/w_1983,h_1487,c_limit/WI110122_FF_ForeverDogs_2400x1350_crop.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://blog.nature.org/wp-content/uploads/2022/05/29473548577_8414ac0a6e_k.jpg?w=1024"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://static.independent.co.uk/2022/03/23/15/newFile-7.jpg?quality=75&width=1200&auto=webp"
    }
  ];
  


  const cardsOnDom = (array) => {
    let domString = "";
    
    for (let i = 0; i < array.length ; i++) {
      const pet = array[i];
      
      domString += `<div id=app class="card-cont" style="width: 18rem;">
      <div class="card-body">
      <img src=${pet.imageUrl} class="card-img-top" alt="...">
      <h5 class="card-title"  style="background-color:${pet.color};padding: 5px; color: white; text-shadow: 2px 2px 2px black;"  >${pet.name}</h5>
      <p class="card-text">${pet.specialSkill}</p>
      <footer class="grad" >${pet.type}</footer>
          <button class="btn danger" id="delete--${pet.id}">Delete</button>
        </div>
      </div>`;
      
    }    
    targetingApp.innerHTML = domString;  // entire function pushes 'cards' to the dom
  };

  const targetingApp = document.querySelector('.card-cont') //targets/creates a variable; the container that will hold all the cards

  const filter = (cardsOnDom, petType) =>{    //makes function with params -  cardsOnDom, petType
  return cardsOnDom.filter((member) =>    // filter() creates a new array,  member is the element/key that gets processed 
    member.type === petType);         // member.type is the same as type on obj pets.type
  };
  
  const allBtn = document.querySelector(`#all-btn`);
  const dogBtn = document.querySelector('#dog-btn');
  const catBtn = document.querySelector('#cat-btn');
  const dinoBtn = document.querySelector('#dino-btn');

  cardsOnDom(pets);  // default display, shows pets(all)

  allBtn.addEventListener("click", () => {cardsOnDom(pets);  //click happens the dom displays pets
  filterToggle = true
  console.log(filterToggle)
  });

dinoBtn.addEventListener("click", () => {const dinoArray = filter(pets, "dino"); // filter(array, petType)  ie pets and "dino"
  cardsOnDom(dinoArray)  // pushes the new array from filter
  filterToggle = false
  console.log(dinoArray)
});

  catBtn.addEventListener("click", () => {const catArray = filter(pets, "cat");
  cardsOnDom(catArray)
  filterToggle = false
  console.log(filterToggle)  
});
  
  dogBtn.addEventListener("click", () => {const dogArray = filter(pets, "dog"); 
    cardsOnDom(dogArray)
    filterToggle = false
    console.log(filterToggle)
  });

const form = document.querySelector("form")

const createPet = (e) =>{
  e.preventDefault()
    const newpetsObj = {
        id: pets.length +1,
        name: document.querySelector("#name").value,
        color: document.querySelector("#color").value,
        specialSkill: document.querySelector("#special-skill").value,
        type: document.querySelector("#type").value,
        imageUrl: document.querySelector("#image").value,
      };
    pets.push(newpetsObj);
    cardsOnDom(pets)
    form.reset();
    };
    form.addEventListener("submit",createPet)



const app = document.querySelector("#app");


app.addEventListener("click", (e) =>{

  if (e.target.id.includes("delete")) {
    const[, id] = e.target.id.split("--");
    const index = pets.findIndex((pet) => pet.id === Number(id));
    const pet = pets.find((p) => p.id === Number(id))
    pets.splice(index, 1);     
    switch (filterToggle) {
      case false:        
        const currentArray = filter(pets, pet.type);
        cardsOnDom(currentArray);
        break;
        default:
        cardsOnDom(pets)  
        break;
  }
  }
});
