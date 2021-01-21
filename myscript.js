//import Game from "./engine/game";

/**
 * Course: COMP 426
 * Assignment: a05
 * Author: <type your name here>
 *
 * This script uses jQuery to build an HTML page with content taken from the
 * data defined in data.js.
 */



/**
 * Given a hero object (see data.js), this function generates a "card" showing
 *     the hero's name, information, and colors.
 * @param hero  A hero object (see data.js)
 */
export const renderHeroCard = function(state) {
    // TODO: Copy your code from a04 to render the hero card
    return  `
    <div class="column">
        <div style="text-align:center;height:130px;width:130px;background-color:lightgreen;padding-right: 5px; padding-left: 5px;"> 
            <p><span style="font-size:18pt;color:black">${state}</span></p>

        </div> 
    </div>
    `;



};



/**
 * Given a hero object, this function generates a <form> which allows the
 *     user to edit the fields of the hero. The form inputs should be
 *     pre-populated with the initial values of the hero.
 * @param hero  The hero object to edit (see data.js)
 */
export const renderHeroEditForm = function(hero) {
    // TODO: Copy your code from a04 to render the hero edit form
    return `
            <div id="${hero.id}" style="text-align:center;height:570px;width:300px;background-color:green;padding-right: 5px; padding-left: 5px;">
                <form>
                    <div class="field">
                        <label class="label">Hero Name</label>
                        <div class="control">
                            <input id="inputname" class="input" type="text" value="${hero.name}" name="heroname">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">First Name</label>
                        <div class="control">
                            <input id="inputfirst" class="input" type="text" value="${hero.first}" name="firstname">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Last Name</label>
                        <div class="control">
                            <input id="inputlast" class="input" type="text" value="${hero.last}" name="lastname">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Subtitle</label>
                        <div class="control">
                            <input id="inputsubtitle" class="input" type="text" value="${hero.subtitle}" name="subtitle">
                        </div>
                    </div>
                    
                    <div class="field">
                        <label class="label">Description</label>
                        <div class="control">
                            <textarea rows="6" cols="45" id="inputdescription">${hero.description}</textarea>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">First Seen</label>
                        <div class="control">
                            <input id="seenfirst" type="date" name="firstseen" value="${hero.firstSeen.toISOString().substring(0, 10)}">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button id="${hero.id}" class="submitBtn1" type="submit" value="Save">Submit</button> 
                            <button id="${hero.first}" class="cancelBtn1" type="reset" value="Cancel">Cancel</button>
                        </div>
                    </div>

                </form>
            </div>
    
    `;
    // value="${hero.firstSeen.getFullYear()}-01-01">


};



/**
 * Handles the JavaScript event representing a user clicking on the "edit"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleEditButtonPress = function(event) {
    // TODO: Render the hero edit form for the clicked hero and replace the
    //       hero's card in the DOM with their edit form instead
    /////$("#event.target.zzz").remove();
    //document.getElementById(event.target.attr("zzz")).remove();
    //var a = "\"#" + event.target.id + "\"";
    //alert(a);
    var i = 0;
    for (i = 0; i < heroicData.length; i++) {
        if (heroicData[i].last == event.target.id) {
            break;
        }
    }
    var tmpObj=document.createElement("div"); // created an empty 'div'
    tmpObj.innerHTML=renderHeroEditForm(heroicData[i]); // replaced
    document.getElementById(heroicData[i].id).replaceWith(tmpObj);

    $(".cancelBtn1").on("click", handleCancelButtonPress);
    $(".submitBtn1").on("click", handleEditFormSubmit);



    //document.getElementById(event.target.id).replaceWith(renderHeroEditForm(heroicData[1]));
};



/**
 * Handles the JavaScript event representing a user clicking on the "cancel"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleCancelButtonPress = function(event) {
    // TODO: Render the hero card for the clicked hero and replace the
    //       hero's edit form in the DOM with their card instead

    var i = 0;
    for (i = 0; i < heroicData.length; i++) {
        if (heroicData[i].first == event.target.id) {
            break;
        }
    }
    
    var tmpObj2=document.createElement("div"); // created an empty 'div'
    tmpObj2.innerHTML=renderHeroCard(heroicData[i]); // replaced
    document.getElementById(heroicData[i].id).replaceWith(tmpObj2);

    $(".edit").on("click", handleEditButtonPress);


};



/**
 * Handles the JavaScript event representing a user clicking on the "submit"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleEditFormSubmit = function(event) {
    // TODO: Render the hero card using the updated field values from the
    //       submitted form and replace the hero's edit form in the DOM with
    //       their updated card instead
    var i = 0;
    for (i = 0; i < heroicData.length; i++) {
        if (heroicData[i].id == event.target.id) {
            break;
        }
    }

    heroicData[i].name = $("#inputname").val();
    heroicData[i].first = $("#inputfirst").val();
    heroicData[i].last = $("#inputlast").val();
    heroicData[i].subtitle = $("#inputsubtitle").val();
    heroicData[i].description = $("#inputdescription").val();
    var year = $("#seenfirst").val().substring(0, 4);
    var month = $("#seenfirst").val().substring(5, 7)-1;
    var day = $("#seenfirst").val().substring(8, 10);
    heroicData[i].firstSeen = new Date(year, month, day);

    var tmpObj2=document.createElement("div"); // created an empty 'div'
    tmpObj2.innerHTML=renderHeroCard(heroicData[i]); // replaced
    document.getElementById(heroicData[i].id).replaceWith(tmpObj2);

    $(".edit").on("click", handleEditButtonPress);

};



/**
 * Given an array of hero objects, this function converts the data into HTML,
 *     loads it into the DOM, and adds event handlers.
 * @param  heroes  An array of hero objects to load (see data.js)
 */
export const loadHeroesIntoDOM = function(state) {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');
    var i = 0;

    // TODO: Generate the heroes using renderHeroCard()
    //       NOTE: Copy your code from a04 for this part
    // TODO: Append the hero cards to the $root element
    //       NOTE: Copy your code from a04 for this part
    for (i = 0; i < size; i++) {
        let tile  = renderHeroCard(gameState.board[i]);
        $root.append(tile);
    }

    // TODO: Use jQuery to add handleEditButtonPress() as an event handler for
    //       clicking the edit button
    $(".edit").on("click", handleEditButtonPress);
    //document.getElementById("edtbtn").addEventListener("click", handleEditButtonPress);
    // TODO: Use jQuery to add handleEditFormSubmit() as an event handler for
    //       submitting the form
    $(".submitBtn1").on("click", handleEditFormSubmit);

    // TODO: Use jQuery to add handleCancelButtonPress() as an event handler for
    //       clicking the cancel button
    $(".cancelBtn1").on("click", handleCancelButtonPress);

};



/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function() {
    alert('hi');
    let game = new Game(4);
    loadHeroesIntoDOM(gameState);
});
