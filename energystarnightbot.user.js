// ==UserScript==
// @name         Energy Star Night 2019 Game Bot
// @namespace    https://github.com/ggmanugg/energyair_bot/blob/master/energyairbot.user.js
// @version      1.0
// @description  Win tickets for the Energy Star Night 2019 automatically
// @author       ggmanugg: https://github.com/ggmanugg
// @match        *game.energy.ch/*
// @run-at       document-end
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// ==/UserScript==
window.addEventListener('load', function () {

    const questions = {
        "WANN WURDE ENERGY STARS FOR FREE IN ENERGY STAR NIGHT UMBENANNT?": "Oktober 2016",
        "WELCHE AUSGABE DER ENERGY STAR NIGHT WURDE ZULETZT AUF PRO7 SCHWEIZ ÜBERTRAGEN?": "Energy Star Night 2017",
        "WAS KANN MAN BEI LIPO KAUFEN?": "Möbel",
        "IN WELCHEN BEIDEN STÄDTEN ERÖFFNET LIPO AM 22. NOVEMBER 2019 JEWEILS EINE NEUE FILIALE?": "Winterthur und Villeneuve",
        "WAS GARANTIERT LIPO SEINEN KUNDEN?": "Die tiefsten Preise der Schweiz",
        "WELCHER ACT ERÖFFNETE DIE ENERGY STAR NIGHT 2018?": "Stefanie Heinzmann",
        "WO FINDET DIE OFFIZIELLE AFTERSHOWPARTY DER ENERGY STAR NIGHT STATT?": "Hiltl Club, Zürich",
        "WIE VIELE ENERGY STAR NIGHT TICKETS WERDEN VERLOST?": "14'000",
        "WELCHER SCHWEIZER ACT RÄUMTE DEN ENERGY MUSIC AWARD 2018 AB?": "Lo &amp; Leduc",
        "WELCHE TICKETKATEGORIE WIRD NICHT FÜR DIE ENERGY STAR NIGHT VERLOST?": "VIP",
        "WIE HEISST DER HUND IM AKTUELLEN WERBESPOT?": "Mex",
        "DIE ENERGY STAR NIGHT IST…": "das grösste Indoor Musik-Event der Schweiz",
        "DIE WIEVIELTE ENERGY STAR NIGHT AUSGABE FINDET DIESES JAHR STATT?": "Die siebzehnte",
        "WANN FINDET DIE ENERGY STAR NIGHT 2019 STATT?": "22. November 2019",
        "WIE VIELE ENERGY MUSIC AWARDS (IN ZUSAMMENARBEIT MIT DEM SCHWEIZERISCHEN ROTEN KREUZ) WURDEN BISHER VERLIEHEN?": "3",
        "AUF WELCHEM WEG KANN MAN KEINE ENERGY STAR NIGHT TICKETS GEWINNEN?": "E-Mail",
        "WAS IST DER ENERGY MUSIC AWARD?": "Ein Schweizer Musikpreis",
        "WIE VIELE KUNDEN BESUCHEN LIPO JÄHRLICH?": "Über 1'000'000",
        "WELCHE FARBE HAT DAS LIPO LOGO?": "Orange",
        "WAS PASSIERT, WENN ES AM EVENTTAG REGNET?": "Energy Star Night findet trotzdem statt",
        "WO ERFÄHRST DU IMMER DIE NEUSTEN INFOS RUND UM DIE ENERGY STAR NIGHT?": "im Radio, auf der Event-Website und über Social Media",
        "WELCHES UNTERNEHMEN IST «MEDIENPARTNER» DER ENERGY STAR NIGHT 2019?": "Usgang.ch",
        "WELCHES UNTERNEHMEN IST «PRESENTING PARTNER» DER ENERGY STAR NIGHT?": "Swisscom",
        "IN WELCHEM KANTON GIBT ES KEINE LIPO FILIALE?": "Graubünden",
        "AN WIE VIELEN STANDORTEN BIETET LIPO AKTUELL ALLES AN, WAS ES ZUM WOHNEN BRAUCHT": "22",
        "WIE LAUTET DER OFFIZIELLE HASHTAG DER ENERGY STAR NIGHT 2019?": "#esn19",
        "WEN KÜSSTE ENERGY MODERATOR JONTSCH AN DER LETZTJÄHRIGEN ENERGY STAR NIGHT?": "Jastina Doreen, Ex-Miss Schweiz",
        "IN WELCHER STADT ERÖFFNETE 1976 DIE ERSTE LIPO FILIALE DER SCHWEIZ?": "Reinach (Kanton Basel)",
        "ENERGY STAR NIGHT TICKETS KANN MAN AUSSCHLIESSLICH…": "gewinnen",
        "AUF WELCHER SOCIAL MEDIA PLATTFORM KANN MAN KEINE ENERGY STAR NIGHT TICKETS GEWINNEN?": "Twitter",
        "IN WELCHER EVENTLOCATION FINDET DIE ENERGY STAR NIGHT STATT?": "Hallenstadion, Zürich",
        "WANN IST KONZERTBEGINN DER ENERGY STAR NIGHT?": "Um 19:00 Uhr",
        "WIE LAUTETE DAS MOTTO DER ENERGY STAR NIGHT 2018?": "«The Game Is On»",
        "WANN FAND DIE ENERGY STAR NIGHT (EHEMALS ENERGY STARS FOR FREE) ZUM ERSTEN MAL STATT?": "2003",
        "DIE ENERGY STAR NIGHT HIESS EHEMALS...": "Energy Stars For Free",
        "DER ENERGY MUSIC AWARD WIRD JEWEILS IN ZUSAMMENARBEIT MIT ... VERLIEHEN?": "dem Schweizerischen Roten Kreuz",
        "WELCHER DIESER ACTS HATTE EINEN AUFTRITT AN DER ENERGY STAR NIGHT 2017?": "Mark Forster",
        "WAS VERSTECKT SICH HINTER DEM BEGRIFF «MASSDESIGN» BEI LIPO?": "Vorhänge individuell konfigurieren",
        "WIE HEISST DIE MEMBERSHIP VON ENERGY, BEI DER DU VON VIELEN VERGÜNSTIGUNGEN PROFITIERST UND AN EINEN AUSGEWÄHLTEN EVENT EINGELADEN WIRST?": "One",
        "WIE HEISST DAS NEUE REISEPORTAL VON ENERGY FÜR DEINE BESTEN FERIEN?": "Energy Holidays",
        "IN WELCHEN STÄDTEN GIBT ES ENERGY-RADIOSENDER?": "«Basel, Bern und Zürich",
        "WIE HEISST DER ENERGY BASEL-MODERATOR UND BEKANNTE INFLUENCER MIT ITALIENISCHEN WURZELN?": "Pasquale Stamandino",
        "BEI WELCHEM BELIEBTEN ENERGY-FORMAT GIBT ES TÄGLICH SONG-VERHÖRER IN DER MORGENSHOW?": "Voll Daneben",
        "WIE HEISST DIE MORGENSHOW VON ENERGY?": "Energy Mein Morgen",
        "WIE HEISSEN DIE BEIDEN MORGENSHOWMODERATOREN VON ENERGY BERN?": "Simon Moser &amp; Assistent Schelker",
        "WIE WIRD MAN BEI ENERGY DOWNTOWN ZUM «QUIZKÖNIG» GEKRÖNT?": "5 richtige Fragen in 30 Sekunden",
        "WIE HEISST DER ENERGY-HIT VON BASCHI, BLIGG, RITSCHI, SEVEN & STRESS AUS DEM JAHR 2009?": "Stahn uf",
        "WAS ERWARTET DICH AN BORD DER ENERGY CRUISE VOM 25. BIS 29. MAI 2020?": "Party, Konzerte und chillen am Pool",
        "WIE HEISST DER LANGJÄHRIGE MORGENSHOWMODERATOR VON ENERGY ZÜRICH?": "Roman Kilchsperger",
        "UM WAS GEHT ES BEI DER MORGENRUBRIK «VOLL DANEBEN»?": "Skurrile Fragen und lustige Antworten",
        "WANN GING ENERGY ZÜRICH ZUM ERSTEN MAL LIVE ON AIR?": "15. August 2003",
        "WIE HEISST DAS BEKANNTESTE MORGENSPIEL VON ENERGY?": "Bärchen &amp; Hasi"
        "WEN HAT HERR BÜNZLI AN SEINER ERSTEN ENERGY STAR NIGHT 2017 INTERVIEWT?": "Mark Forster & Nemo"
    }

    function nextQuestion () {
        $('button#next-question').click()
        setTimeout(makeAction, 200)
    }

    function answerQuestion () {
        let curr = document.querySelector("h3").innerText
        console.log(curr, questions[curr])
        $('#answers .answer-wrapper').each((i, el) => {
            if ($(el).children('label').html() === questions[curr]) {
                $(el).children('input').click()
            }
        })
        setTimeout(nextQuestion, 1800) // question speed
    }

    function restart () {
        x = 1
        document.querySelector('.game-button').click()
        setTimeout(makeAction, 1000)
        console.clear()
    }

    function decision () {
        console.log('Auswahl treffen')
        document.getElementsByTagName('img') [2].click() // 2 = tickets, 3 = lipo
        setTimeout(function () {
            document.getElementsByTagName('img') [2].click()
            setTimeout(makeAction, 2000)
        }, 2000);
    }

    function start () {
        document.querySelector('.game-button').click()
        setTimeout(makeAction, 500)
    }

    function makeAction () {
        if ($(".icon-bubble")[0] != null){
            console.log('Überprüfe Bedingungen')
            if($(".question-text")[0]){
                answerQuestion()
            }
            else if($(".decision")[0]) {
                setTimeout(decision, 1000)
            }
            else if($("h1").is(':contains("Leider verloren")')){
                console.log('Leider verloren / Neustart')
                restart ()
            }
            else if($(".info-paragraph")[0]){
                console.log('Startet Game')
                start ()
            }
        }
        else {
            console.log('icon-bubble nicht vorhanden ' + x)
            if(x===10){
                console.log('x ist 10')
                setTimeout(function(){ location.reload(); }, 30000);
            } else {
                x++
                setTimeout(makeAction, 1000)
            }
        }
    }

    (function() {
        'use strict';
        console.log('Startet Script')
        setTimeout(makeAction, 2000)
    })();

    var x = 1
})
