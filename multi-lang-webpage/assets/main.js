const langSel = document.querySelector('.langSection');
const textTitle = document.querySelector('.title');
const textDescription = document.querySelector('.description');
const buttons = document.querySelectorAll('a');


buttons.forEach(button => {
    button.addEventListener('click',()=>{
        langSel.querySelector('.active').classList.remove('active');
    
        button.classList.add('active');
        const attr = button.getAttribute('language');

        // console.log(attr);
        // console.log(data[attr].title);
        textTitle.textContent = data[attr].title
        textDescription.textContent = data[attr].description
    });
})




// Data
const data = {
    "english": {
        "title" : "Happy World Sparrow Day!",
        "description" : "Sparrows play a crucial role in maintaining ecological balance by controlling insect populations, pollinating flowers, and dispersing seeds. As indicators of environmental health, their presence or absence can reflect the condition of ecosystems. Additionally, sparrows hold cultural significance in many societies, symbolizing simplicity, resilience, and community. Their decline serves as a warning sign of habitat degradation and urbanization's impact on biodiversity, underscoring the urgent need for conservation efforts to safeguard these beloved birds and the ecosystems they inhabit.",
    },
    "marathi": {
        "title" : "जागतिक चिमणी दिनाच्या शुभेच्छा!",
        "description" : "कीटकांच्या लोकसंख्येला नियंत्रित करून, फुलांचे परागकण करून आणि बिया पसरवून पर्यावरणीय संतुलन राखण्यात चिमण्या महत्त्वाची भूमिका बजावतात. पर्यावरणीय आरोग्याचे सूचक म्हणून, त्यांची उपस्थिती किंवा अनुपस्थिती इकोसिस्टमची स्थिती प्रतिबिंबित करू शकते. याव्यतिरिक्त, चिमण्यांना अनेक समाजांमध्ये सांस्कृतिक महत्त्व आहे, ते साधेपणा, लवचिकता आणि समुदायाचे प्रतीक आहे. त्यांचे कमी होणे हे अधिवासाच्या ऱ्हासाचे आणि जैवविविधतेवर शहरीकरणाच्या प्रभावाचे एक चेतावणी चिन्ह म्हणून काम करते, जे या प्रिय पक्षी आणि ते राहतात त्या परिसंस्थेचे रक्षण करण्यासाठी संवर्धन प्रयत्नांची तातडीची गरज अधोरेखित करते.",
    },
    "japanese": {
        "title" : "世界スズメの日おめでとうございます!",
        "description" : "スズメは、昆虫の個体数を制御し、花に受粉し、種子を散布することにより、生態系のバランスを維持する上で重要な役割を果たしています。環境の健全性の指標として、それらの有無は生態系の状態を反映する可能性があります。さらに、スズメは多くの社会で文化的な重要性を持っており、素朴さ、回復力、コミュニティを象徴しています。これらの鳥の減少は、生息地の劣化と都市化が生物多様性に及ぼす影響の警告サインとして機能し、これらの愛する鳥と彼らが生息する生態系を守るための保護活動の緊急の必要性を浮き彫りにしています。",
    },
    "korean": {
        "title" : "세계 참새의 날을 축하합니다!",
        "description" : "참새는 곤충 개체수 조절, 꽃가루받이, 씨앗 분산 등을 통해 생태학적 균형을 유지하는 데 중요한 역할을 합니다. 환경 건강의 지표로서 그 존재 여부는 생태계 상태를 반영할 수 있습니다. 또한 참새는 단순함, 회복력, 공동체를 상징하며 많은 사회에서 문화적 중요성을 지니고 있습니다. 이들의 감소는 서식지 파괴와 도시화가 생물 다양성에 미치는 영향에 대한 경고 신호 역할을 하며, 사랑하는 새와 그들이 서식하는 생태계를 보호하기 위한 보존 노력의 긴급한 필요성을 강조합니다.",
    },

}