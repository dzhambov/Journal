
import {Entry} from './journal-logic'

$(document).ready(function(){
  var myEntry = new Entry
  $("#entry-form").submit(function(event){
    event.preventDefault()
    var title = $('#title').val();
    var body = $("#body").val();
    myEntry.addTitle(title);
    myEntry.addBody(body);
    myEntry.countWords()
    myEntry.countVowels()
    myEntry.countConsonant()
    myEntry.getTester()
    console.log(myEntry)
  })
})