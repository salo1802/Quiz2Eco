class Post{

    constructor(name, content){
        this.name = name;
        this.content = content;
    }

    loadPost = ()=>{
        let component = document.createElement('div');
      
            
            let contentConteiner = document.createElement('h2');
            contentConteiner.innerHTML = this.content;

            let nameConteiner = document.createElement('h5');
            nameConteiner.innerHTML = "@"+ this.name;
            component.appendChild(contentConteiner);
            component.appendChild(nameConteiner);
       
        return component;
    }


}