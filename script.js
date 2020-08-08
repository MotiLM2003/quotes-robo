const audioElement = document.getElementById('audio');
const button = document.getElementById('button');
const textInput = document.getElementById('text-input');
function toggleButton() {
  button.disabled = !button.disabled;
}

textInput.addEventListener('keyup', (e) => {
  console.log(e);
  if (e.keyCode === 13) {
    const joke = e.target.value;
    // console.log('speak', joke);
    speak(joke);
  }
});

button.addEventListener('click', () => {
  const joke = getJokes();
  console.log(joke);
  speak(joke);
});

audioElement.addEventListener('ended', () => {
  toggleButton();
});

// VoiceRSS Javascript SDK
function speak(str) {
  toggleButton();
  VoiceRSS.speech({
    key: '342db4f265a84004a099d8b060a9bdb6',
    src: str,
    hl: 'he-il',
    v: 'Linda',
    r: -2,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
  });
}

function getJokes() {
  // const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming';
  // try {
  //   const response = await fetch(apiUrl);
  //   const data = await response.json();
  //   console.log(data);
  //   const joke =
  //     data.type === 'twopart'
  //       ? `${data.setup} ... ... ${data.delivery}`
  //       : data.joke;
  //   console.log(data.type);
  //   toggleButton();
  //   speak(joke);
  // } catch (error) {
  //   console.log(error);
  // }

  const jokes = [
    'רק שני דברים הם אינסופיים: היקום והטמטום האנושי, ואני עדיין לא בטוח לגבי הראשון',
    'בחיים יש אפשרות לבחור בין שתי דרכים: לחכות ליום מיוחד שיגיע, או לחגוג כל יום מיוחד',
    'אתם מה שאתם חוזרים ועושים כל הזמן. מצוינות איפוא, היא לא אקט, אלא הרגל',
    'תשאירו למחר רק את מה שאתם מוכנים למות ולהשאיר אחריכם בלתי עשוי',
    'כשאתם רואים אדם מצליח, אתם רק רואים את התהילה הציבורית שלו, ואף פעם לא את ההקרבות הפרטיות שנדרשו כדי להגיע אליה',
    'דם דגול הופך לכזה כשהוא יודע מתי לשים בצד את הדברים החשובים כדי לגמור ולהצטיין בדברים החיוניים',
    'נסו לא להפוך להיות אנשים מצליחים, אלא אנשים בעלי ערך',
    'זה לא המין הכי חזק ששורד, וגם לא הכי חכם, אלא זה שמגיב הכי מהר לשינוי',
    'מוחות גדולים מתדיינים על רעיונות; מוחות ממוצעים מתדיינים על אירועים; מוחות קטנים מתדיינים על אנשים',
    'המרחק בין חוסר שפיות וגאונות נמדד אך רק על ידי הצלחה',
    'אל תחששו לוותר על הטוב מספיק בשביל המצוין',
  ];
  const index = Math.floor(Math.random() * jokes.length);
  console.log(index);

  return jokes[index];
}
