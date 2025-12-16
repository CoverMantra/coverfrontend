import React from 'react';
interface LoanTypeItem {
  heading: string;
  points: string[];
}

interface ComparisonItem {
  heading: string;
  content: string;
  subPoints?: string[]; 
}

interface BlogData {
  title: string;
  introduction: string;
  section1Title: string;
  loanTypes: LoanTypeItem[];
  section2Title: string;
  comparisonFactors: ComparisonItem[];
  section3Title: string;
  selectionSteps: string[];
  conclusion: string;
}
const blogContent: BlogData = {
  title: "पैसा बर्बाद करना बंद करें: सही लोन चुनने के लिए एक शुरुआती गाइड",
  introduction: "लोन लेना अक्सर ज़िंदगी के बड़े फैसलों में से एक होता है—चाहे वह घर खरीदना हो, गाड़ी लेना हो या किसी व्यापार में निवेश करना हो। एक गलत लोन का चुनाव आपको अनावश्यक ब्याज़ (interest) और फीस के रूप में हज़ारों रुपये का नुकसान करा सकता है। इस गाइड का उद्देश्य आपको ऐसे बुनियादी सिद्धांत सिखाना है जिससे आप अपनी वित्तीय ज़रूरतों के लिए सबसे सही और सस्ता लोन चुन सकें।",
  
  section1Title: "मुख्य लोन के प्रकारों को समझें",
  loanTypes: [
    {
      heading: "सुरक्षित लोन (Secured Loan) बनाम असुरक्षित लोन (Unsecured Loan)",
      points: [
        "सुरक्षित लोन: इनमें आपको गारंटी (collateral), जैसे कि घर या कार, गिरवी रखनी पड़ती है। अगर आप लोन नहीं चुका पाते हैं, तो बैंक आपकी संपत्ति ले सकता है। फ़ायदा यह है कि इनकी ब्याज़ दरें (interest rates) अक्सर कम होती हैं (जैसे: होम लोन)।",
        "असुरक्षित लोन: इनमें किसी गारंटी की ज़रूरत नहीं होती, लेकिन आपकी क्रेडिट हिस्ट्री (credit history) देखी जाती है। जोखिम ज़्यादा होने के कारण इनकी ब्याज़ दरें ज़्यादा होती हैं (जैसे: पर्सनल लोन, क्रेडिट कार्ड)।",
      ],
    },
    {
      heading: "निश्चित दर (Fixed Rate) बनाम परिवर्तनीय दर (Variable Rate)",
      points: [
        "निश्चित दर: ब्याज़ दर पूरे लोन की अवधि के दौरान समान रहती है। यह आपको मासिक किस्तों (EMIs) में स्थिरता और भविष्य की निश्चितता देती है।",
        "परिवर्तनीय दर: ब्याज़ दर बाज़ार की स्थितियों के अनुसार बदलती रहती है। यह शुरू में कम हो सकती है, लेकिन बढ़ने का जोखिम भी होता है।",
      ],
    },
  ],

  section2Title: "तुलना के लिए तीन ज़रूरी कारक",
  comparisonFactors: [
    {
      heading: "A. वार्षिक प्रतिशत दर (Annual Percentage Rate - APR)",
      content: "सिर्फ़ 'ब्याज़ दर' न देखें, बल्कि **APR** देखें। APR में केवल ब्याज़ ही नहीं, बल्कि लोन से जुड़े सभी अन्य शुल्क (fees) भी शामिल होते हैं। यह लोन की **वास्तविक वार्षिक लागत** जानने का सबसे अच्छा तरीका है। हमेशा सबसे कम APR वाला ऑफ़र चुनें।",
    },
    {
      heading: "B. शुल्क और जुर्माना (Fees and Penalties)",
      content: "कम ब्याज़ दर वाला लोन भी महँगा हो सकता है अगर उसमें नीचे दिए गए शुल्क अधिक हों:",
      subPoints: [
        "ओरिजिनेशन फीस (Origination Fee): लोन देते समय लगने वाला शुल्क।",
        "पूर्व भुगतान जुर्माना (Prepayment Penalty): यदि आप समय से पहले लोन चुकाते हैं तो लगने वाला शुल्क।",
        "विलंब शुल्क (Late Payment Fee): किस्त देर से चुकाने पर लगने वाला जुर्माना।",
      ],
    },
    {
      heading: "C. लोन की अवधि (Loan Term)",
      content: "यह वह समय है जिसके भीतर आपको लोन चुकाना है।",
      subPoints: [
        "लंबी अवधि: मासिक किस्तें (EMIs) कम होंगी, लेकिन कुल मिलाकर **अधिक ब्याज़** चुकाना पड़ेगा।",
        "छोटी अवधि: मासिक किस्तें ज़्यादा होंगी, लेकिन कुल ब्याज़ **कम** चुकाना पड़ेगा।",
        "सही संतुलन ढूँढना ज़रूरी है जो आपकी मासिक बजट को प्रभावित न करे।",
      ],
    },
  ],

  section3Title: "सही लोन चुनने की सरल प्रक्रिया",
  selectionSteps: [
    "ज़रूरत तय करें: आपको कितनी राशि की और किस उद्देश्य के लिए ज़रूरत है।",
    "क्रेडिट स्कोर जाँचें: एक **अच्छा क्रेडिट स्कोर** आपको सबसे कम APR के लिए योग्य बनाता है।",
    "कई संस्थानों से तुलना करें: बैंक, क्रेडिट यूनियन (Credit Unions) और ऑनलाइन ऋणदाताओं (Online Lenders) से प्रारंभिक ऑफ़र लें।",
    "कुल लागत का हिसाब लगाएँ: ऑनलाइन कैलकुलेटर का उपयोग करके प्रत्येक ऑफ़र में कुल कितना ब्याज़ चुकाना होगा, इसका पता लगाएँ।",
    "बारीक़ी से पढ़ें: लोन एग्रीमेंट (agreement) में सभी नियमों और शर्तों को ध्यान से पढ़ें।",
  ],
  
  conclusion: "याद रखें, सबसे अच्छा लोन वह है जो आपकी ज़रूरतें पूरी करते हुए **सबसे कम कुल लागत** पर उपलब्ध हो। सोच-समझकर तुलना करने की यह प्रक्रिया आपको वित्तीय बोझ से बचाएगी और पैसा बर्बाद होने से रोकेगी।",
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans p-4 md:p-8">
      {/* Page Container and Header */}
      <main className="max-w-4xl mx-auto">
        <header className="text-center mb-5 p-6 mt-20 bg-indigo-600 rounded-xl shadow-2xl">
          <h1 className="text-3xl md:text-4xl mt-10 font-extrabold text-white leading-tight">
            {blogContent.title}
          </h1>
        </header>

        {/* Introduction */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">परिचय (Introduction)</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            {blogContent.introduction}
          </p>
        </section>

        {/* Section 1: Loan Types */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 border-b-2 border-indigo-200 pb-2">
            {blogContent.section1Title}
          </h2>
          <div className="space-y-8">
            {blogContent.loanTypes.map((type, index) => (
              <div key={index} className="p-5 bg-white rounded-lg shadow border-l-4 border-indigo-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{type.heading}</h3>
                <ul className="list-disc ml-5 space-y-3 text-gray-600">
                  {type.points.map((point, pIndex) => (
                    <li key={pIndex} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Comparison Factors */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 border-b-2 border-indigo-200 pb-2">
            {blogContent.section2Title}
          </h2>
          <div className="space-y-8">
            {blogContent.comparisonFactors.map((factor, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{factor.heading}</h3>
                <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: factor.content }} />
                
                {factor.subPoints && (
                  <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    {factor.subPoints.map((point, spIndex) => (
                      <li key={spIndex} dangerouslySetInnerHTML={{ __html: point }} />
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Selection Process */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 border-b-2 border-indigo-200 pb-2">
            {blogContent.section3Title}
          </h2>
          <ol className="space-y-4">
            {blogContent.selectionSteps.map((step, index) => (
              <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white font-bold text-sm shrink-0 mt-0.5 mr-3">
                  {index + 1}
                </span>
                <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: step }} />
              </li>
            ))}
          </ol>
        </section>

        {/* Conclusion */}
        <section className="p-8 bg-indigo-50 rounded-xl border-t-4 border-indigo-500 shadow-inner text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">निष्कर्ष (Conclusion)</h3>
            <p className="text-indigo-800 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: blogContent.conclusion }} />
        </section>
      </main>
      </div>
  );
};

export default App;
