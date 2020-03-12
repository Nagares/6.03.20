document.querySelector('body').addEventListener('click', clickHandler);

function clickHandler(event) {
  if (!event.target.hasAttribute('editable') ) return;

  event.preventDefault();

  const {target: targetElement} = event;

  const type = targetElement.getAttribute('editable');
  console.log('type', type);





  const divElement = document.createElement('div');
  divElement.classList.add('col-xs-10','col-md-10');
  divElement.id = type;
  divElement.setAttribute("style", "display:flex; align-items:center;");
 

  targetElement.parentNode.append(divElement);


  const divElementCol = document.createElement('div');
  divElementCol.classList.add('col-xs-6','col-md-3');
  divElement.appendChild(divElementCol);

 targetElement.parentNode.classList.add('form-group', 'row');

  const inputElement = document.createElement('input');
  inputElement.classList.add('form-control');
  inputElement.id = type;
  divElementCol.append(inputElement);


  const buttonElementOk = document.createElement('button');
  buttonElementOk.classList.add('btn','btn-primary','glyphicon','glyphicon-ok','btn-xs');
  divElement.appendChild(buttonElementOk);

  const buttonElementRem = document.createElement('button');
  buttonElementRem.classList.add('btn','btn-danger','glyphicon','glyphicon-remove','btn-xs');
  divElement.appendChild(buttonElementRem);


  inputElement.setAttribute('type', type);

  inputElement.value = targetElement.innerText;





  targetElement.parentNode.removeChild(targetElement);

  // inputElement.focus();
  inputElement.select();
 





  buttonElementOk.addEventListener('click', function(event) {

    console.log(event)
        inputElement.parentNode.parentNode.parentNode.appendChild(targetElement);
        // targetElement.innerText = this.value;
        targetElement.innerText = inputElement.value;
      
        divElement.remove();
        inputElement.remove();
        buttonElementOk.remove();
        buttonElementRem.remove();
        targetElement.parentNode.classList.remove('form-group', 'row');
  });

  buttonElementRem.addEventListener('click', function(event) {

    
    
        inputElement.parentNode.parentNode.parentNode.appendChild(targetElement);
        divElement.remove();
        inputElement.remove();
        buttonElementOk.remove();
        buttonElementRem.remove();
        targetElement.parentNode.classList.remove('form-group', 'row');
        
  });
}




