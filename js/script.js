const tabBtn = document.querySelectorAll(".list-tab li");
const tabContent = document.querySelectorAll('.tab-content ul li');

tabBtn.forEach((item, tab_index)=>{
	item.addEventListener('click', function(){
		tabBtn.forEach((tab)=>{
			tab.classList.remove('ativo');			
		});
		item.classList.add('ativo');
		tabContent.forEach((content, content_index)=>{
			if(content_index == tab_index){
				content.classList.add('ativo');
			}else{
				content.classList.remove('ativo');
			}
		});//tabContent
	});
});
