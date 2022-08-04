const Chat = document.getElementById('FormChat');


window.addEventListener('DOMContentLoaded',e=>{


		$('.chat').slideToggle(300, 'swing');
		$('.chat-message-counter').fadeToggle(300, 'swing');


})

Chat.addEventListener('submit', (e)=>{
	e.preventDefault();

	const mensaje = document.getElementById('mensaje').value;
	var url = "https://wa.me/50661672539?text="+mensaje;
	window.location.href = url;

})