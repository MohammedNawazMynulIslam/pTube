const handleLoadCategory = async ()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json();
    // console.log(data.data)


    const tabContainer = document.getElementById('tab-container');

    data.data.slice(0,4).forEach((category)=>{
        const div = document.createElement("div");
        div.innerHTML =`
        <a onclick="handleLoadMedia('${category.category_id}')"
        class="tab">${category.category}</a>
        `;
        tabContainer.appendChild(div)
    });
};
    const handleLoadMedia = async (categoryId)=>{
        const res = await fetch(
            `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
        );
        const data = await res.json();
        console.log(data.data)


};
handleLoadCategory ()