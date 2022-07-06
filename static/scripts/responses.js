function getBotResponse(input) {
    //rock paper scissors

    if (input == "ja") {
        return "dann bitte rufen Sie die Support an";
    } else if (input == "danke") {
        return "gerne doch";
    } else if (input == "fick dich") {
        return "blah blah";
    }else if (input == "ok") {
        return "bist dann tschüs";
    }

    // Simple responses
    if (input == "hallo") {
        return "hallo wenn du irgen ein scheiß schreibst dann! rufe ich deine mama damit du suspendiert wird";
    } else if (input == "bye") {
        return "Talk to you later!";
    } else {
        return "Das habe ich nicht verstanden!";
    }
    
}