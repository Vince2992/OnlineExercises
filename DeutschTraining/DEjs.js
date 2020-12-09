String.prototype.tpl = function(ex) {
  var reGx = this;
  for (var i in ex) {
    reGx = reGx.replace(new RegExp("\\$" + i, 'g'), ex[i])
  }
  return reGx
}

let articlesVar = `<li><a href='#' onclick='load("$url")'>$label</a></li>`

$(document).ready(main);

function main() {
  $.ajax({
    method: 'GET',
    url: 'articles.json',
    success: function(l) {
      for (var i = 0; i < l.length; i++) {
        $('#articles').append(articlesVar.tpl({
          url: l[i].url,
          label: l[i].label
        }))
      }
    },
    error: function() {
      alert('Empty :(')
    }
  });


  $('#subst').click(function() {
    if (this.checked)
      $('.subst').addClass('green')
    else
      $('.subst').removeClass('green')
  })
  $('#verb').click(function() {
    if (this.checked)
      $('.verb').addClass('aqua')
    else
      $('.verb').removeClass('aqua')
  })
  $('#imperativ').click(function() {
    if (this.checked)
      $('.imperativ').addClass('imptiv')
    else
      $('.imperativ').removeClass('imptiv')
  })
  $('#präteritum').click(function() {
    if (this.checked)
      $('.präteritum').addClass('prät')
    else
      $('.präteritum').removeClass('prät')
  })
  $('#adj').change(function() {
    if (this.checked)
      $('.adj').addClass('red')
    else
      $('.adj').removeClass('red')
  })
};

function load(article) {
  $.ajax({
    method: 'GET',
    url: article,
    success: function(l) {
      $('#article').html(l)
      $('#title').html($('#article h1'))
    },
    error: function() {
      alert('Corrupted file: ' + article)
    }
  });
};

function textToAudio() {
  let msg = document.getElementById("two").textContent;

  let speech = new SpeechSynthesisUtterance();
  speech.lang = "de-DE";

  speech.text = msg;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}

function textCancel1() {

  let speech = new SpeechSynthesisUtterance();

  window.speechSynthesis.cancel(speech);
}


function textToAudio2() {
  let ins = document.getElementById("insertSpeak").value;

  let repeat = new SpeechSynthesisUtterance();
  repeat.lang = "de-DE";

  repeat.text = ins;
  repeat.volume = 1;
  repeat.rate = 1;
  repeat.pitch = 1;

  window.speechSynthesis.speak(repeat);
}

function textCancel2() {

  let repeat = new SpeechSynthesisUtterance();

  window.speechSynthesis.cancel(repeat);
}
