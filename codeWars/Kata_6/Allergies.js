function Allergies(score){
    this.personal_allergies = [];
    this.ALLERGY_SCORES = {
        "eggs": 1,
        "peanuts": 2,
        "shellfish": 4,
        "strawberries": 8,
        "tomatoes": 16,
        "chocolate": 32,
        "pollen": 64,
        "cats": 128
    }
    this.isAllergicTo = function(allergen){
        //your code here
        const binary_score = [];
        let scoreConvert = score;
            for(let i = 1; scoreConvert > 0; i = i * 2) {
                binary_score.push((scoreConvert % 2) * i)
                scoreConvert = Math.floor(scoreConvert / 2)
        }
        
        return binary_score.includes(this.ALLERGY_SCORES[allergen])
    }

    this.allergies = function(){
        //your code here
        const allergiess = Object.keys(this.ALLERGY_SCORES);
        for (let i = 0; i < allergiess.length; i++) {
            if (this.isAllergicTo(allergiess[i])) {
                this.personal_allergies = [...this.personal_allergies, allergiess[i]]
            }
        }
        return this.personal_allergies;
    }

    return this.allergies()
}

console.log(Allergies(68));