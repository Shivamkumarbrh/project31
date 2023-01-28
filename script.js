const ques = [
    {
        'que':' What do you understand by HTML?',
        'a': 'HTML describes the structure of a webpage',
        'b':'HTML is the standard markup language mainly used to create web pages',
        'c':'HTML consists of a set of elements that helps the browser how to view the content',
        'd':'All of the above',
        'correct':'d'
    },
    {
        'que':' Who is the father of HTML?',
        'a': 'Rasmus Lerdorf',
        'b':'Tim Berners-Lee',
        'c':'Brendan Eich',
        'd':'Sergey Brin',
        'correct':'b'   
    },
    {
        'que':'HTML stands for ___',
        'a': ' HyperText Markup Language',
        'b':' HyperText Machine Language',
        'c':' HyperText Marking Language',
        'd':' HighText Marking Language',
        'correct':'a'   },
    {
        'que':' Which is used to read an HTML page and render it?',
        'a': '  Web server',
        'b':'  Web network',
        'c':' Web browser',
        'd':'  Web matrix',
        'correct':'c'   },      
    {
        'que':' Which tag is used for inserting the largest heading in HTML?',
        'a': '  head',
        'b':'h1',
        'c':'h6',
        'd':'  heading',
        'correct':'b'   } ]

        let index = 0;
        let total = ques.length;
        let right = 0;
        let wrong = 0;
        const quesBox = document.getElementById('quesBox');
        const optionInputs = document.querySelectorAll('.options');
        const loadQuestion =()=>{
            if(index === total){
                return endQuiz();
            }
            reset()
            const data = ques[index]
            quesBox.innerHTML = `${index+1}) ${data.que}`
            optionInputs[0].nextElementSibling.innerHTML = data.a;
            optionInputs[1].nextElementSibling.innerHTML = data.b;
            optionInputs[2].nextElementSibling.innerHTML = data.c;
            optionInputs[3].nextElementSibling.innerHTML = data.d;
        }
  const submitQuiz =()=>{
    const ans = getAnswer();
    let answar;
    console.log(ans,ques[index].correct)
    if(ans === ques[index].correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion()
    return;
  }
  const getAnswer =()=>{
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answar = input.value;
            }
        }
        )
        return answar;
  }

  const reset=()=>{
    optionInputs.forEach(
        (input)=>{
           input.checked = false;
            }
            )
        }

        const endQuiz = ()=>{
            document.getElementById('box').innerHTML = `
            <div style="text-align:center">
            <h3>Thank you for playing the quiz </h3>
            <h2>${right}/${total} is right.</h2>
            <div>
            `
        }
  
        //init call
        loadQuestion()

