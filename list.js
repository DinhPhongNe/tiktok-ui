const languages_list = [
    {
        type: "language", 
        code: "af",
        title: "Afrikaans"
    },
    {
        type: "language",
        code: "sq",
        title: "Albanian"
    },
    {
        type: "language", 
        code: "am",
        title: "Amharic"
    },
    {
        type: "language",
        code: "ar",
        title: "Arabic"
    },
    {
        type: "language",
        code: "an",
        title: "Aragonese"
    },
    {
        type: "language", 
        code: "hy",
        title: "Armenian"
    },
    {
        type: "language", 
        code: "ast",
        title: "Asturian"
    },
    {
        type: "language", 
        code: "az",
        title: "Azerbaijani"
    },
    {
        type: "language", 
        code: "eu",
        title: "Basque"
    },
    {
        type: "language", 
        code: "be",
        title: "Belarusian"
    },
    {
        type: "language", 
        code: "bn",
        title: "Bengali"
    },
    {
        type: "language", 
        code: "bs",
        title: "Bosnian"
    },
    {
        type: "language", 
        code: "br",
        title: "Breton"
    },
    {
        type: "language", 
        code: "bg",
        title: "Bulgarian"
    },
    {
        type: "language", 
        code: "ca",
        title: "Catalan"
    },
    {
        type: "language", 
        code: "ckb", 
        title: "Central Kurdish"
    },
    {
        type: "language", 
        code: "zh", 
        title: "Chinese"
    },
    {
        type: "language", 
        code: "co", 
        title: "Corsican"
    },
    {
        type: "language", 
        code: "hr", 
        title: "Croatian"
    },
    {
        type: "language", 
        code: "cs", 
        title: "Czech"
    },
    {
        type: "language", 
        code: "da", 
        title: "Danish"
    },
    {
        type: "language", 
        code: "nl", 
        title: "Dutch"
    },
    {
        type: "language", 
        code: "en", 
        title: "English"
    },
    {
        type: "language", 
        code: "eo", 
        title: "Esperanto"
    },
    {
        type: "language", 
        code: "et", 
        title: "Estonian"
    },
    {
        type: "language", 
        code: "fo", 
        title: "Faroese"
    },
    {
        type: "language", 
        code: "fil", 
        title: "Filipino"
    },
    {
        type: "language", 
        code: "fi", 
        title: "Finnish"
    },
    {
        type: "language", 
        code: "fr", 
        title: "French"
    },
    {
        type: "language", 
        code: "gl", 
        title: "Galician"
    },
    {
        type: "language", 
        code: "ka", 
        title: "Georgian"
    },
    {
        type: "language", 
        code: "de", 
        title: "German"
    },
    {
        type: "language", 
        code: "el", 
        title: ""
    },
    {
        type: "language", 
        code: "gn", 
        title: "Guarani"
    },
    {
        type: "language", 
        code: "gu", 
        title: "Gujarati"
    },
    {
        type: "language", 
        code: "ha", 
        title: "Hausa"
    },
    {
        type: "language", 
        code: "haw", 
        title: "Hawaiian"
    },
    {
        type: "language", 
        code: "he", 
        title: "Hebrew"
    },
    {
        type: "language", 
        code: "hi", 
        title: "Hindi"
    },
    {
        type: "language", 
        code: "hu", 
        title: "Hungarian"
    },
    {
        type: "language", 
        code: "is", 
        title: "Icelandic"
    },
    {
        type: "language",
        code: "id", 
        title: "Indonesian"
    },
    {
        type: "language", 
        code: "ia", 
        title: "Interlingua"
    },
    {
        type: "language", 
        code: "ga", 
        title: "Irish"
    },
    {
        type: "language", 
        code: "it", 
        title: "Italian"
    },
    {
        type: "language", 
        code: "ja", 
        title: "Japanese"
    },
    {
        type: "language", 
        code: "kn", 
        title: "Kannada"
    },
    {
        type: "language", 
        code: "kk", 
        title: "Kazakh"
    },
    {
        type: "language", 
        code: "km", 
        title: "Khmer"
    },
    {
        type: "language", 
        code: "ko", 
        title: "Korean"
    },
    {
        type: "language", 
        code: "ku", 
        title: "Kurdish"
    },
    {
        type: "language", 
        code: "ky", 
        title: "Kyrgyz"
    },
    {
        type: "language", 
        code: "lo", 
        title: "Laos"
    },
    {
        type: "language", 
        code: "la", 
        title: "Latin"
    },
    {
        type: "language", 
        code: "lv", 
        title: "Latvian"
    },
    {
        type: "language", 
        code: "ln", 
        title: "Lingala"
    },
    {
        type: "language", 
        code: "lt", 
        title: "Lithuanian"
    },
    {
        type: "language", 
        code: "mk", 
        title: "Macedonian"
    },
    {
        type: "language", 
        code: "ms", 
        title: "Malaysian"
    },
    {
        type: "language", 
        code: "ml", 
        title: "Malayalam"
    },
    {
        type: "language", 
        code: "mt", 
        title: "Maltese"
    },
    {
        type: "language", 
        code: "mr", 
        title: "Marathi"
    },
    {
        type: "language", 
        code: "mn", 
        title: "Mongolian"
    },
    {
        type: "language", 
        code: "ne", 
        title: "Nepali"
    },
    {
        type: "language",
        code: "no", 
        title: "Norwegian"
    },
    {
        type: "language", 
        code: "oc", 
        title: "Occitan"
    },
    {
        type: "language", 
        code: "or", 
        title: "Oriya"
    },
    {
        type: "language", 
        code: "om", 
        title: "Oromo"
    },
    {
        type: "language", 
        code: "ps", 
        title: "Pashto"
    },
    {
        type: "language", 
        code: "fa", 
        title: "Persian"
    },
    {
        type: "language", 
        code: "pl", 
        title: "Polish"
    },
    {
        type: "language", 
        code: "pt", 
        title: "Portuguese"
    },
    {
        type: "language", 
        code: "pa", 
        title: "Punjabi"
    },
    {
        type: "language", 
        code: "qu", 
        title: "Quechua"
    },
    {
        type: "language", 
        code: "ro", 
        title: "Romanian"
    },
    {
        type: "language", 
        code: "rm", 
        title: "Romansh"
    },
    {
        type: "language", 
        code: "ru", 
        title: "Russian"
    },
    {
        type: "language", 
        code: "gd", 
        title: "Scottish"
    },
    {
        type: "language", 
        code: "sr", 
        title: "Serbian"
    },
    {
        type: "language", 
        code: "sh", 
        title: "Serbo"
    },
    {
        type: "language", 
        code: "sn", 
        title: "Shona"
    },
    {
        type: "language", 
        code: "sd", 
        title: "Sindhi"
    },
    {
        type: "language", 
        code: "si", 
        title: "Sinhala"
    },
    {
        type: "language", 
        code: "sk", 
        title: "Slovak"
    },
    {
        type: "language", 
        code: "sl", 
        title: "Slovenian"
    },
    {
        type: "language", 
        code: "so", 
        title: "Somali"
    },
    {
        type: "language", 
        code: "st", 
        title: "Southern Sotho"
    },
    {
        type: "language", 
        code: "es", 
        title: "Spanish"
    },
    {
        type: "language", 
        code: "su", 
        title: "Sundanese"
    },
    {
        type: "language", 
        code: "sw", 
        title: "Swahili"
    },
    {
        type: "language", 
        code: "sv", 
        title: "Swedish"
    },
    {
        type: "language", 
        code: "tg", 
        title: "Tajik"
    },
    {
        type: "language", 
        code: "ta", 
        title: "Tamil"
    },
    {
        type: "language", 
        code: "tt", 
        title: "Tatar"
    },
    {
        type: "language", 
        code: "te", 
        title: "Telugu"
    },
    {
        type: "language", 
        code: "th", 
        title: "Thai"
    },
    {
        type: "language", 
        code: "ti", 
        title: "Tigrinya"
    },
    {
        type: "language", 
        code: "to", 
        title: "Tongan"
    },
    {
        type: "language", 
        code: "tr", 
        title: "Turkish"
    },
    {
        type: "language", 
        code: "tk", 
        title: "Turkmen"
    },
    {
        type: "language", 
        code: "tw", 
        title: "Twi"
    },
    {
        type: "language", 
        code: "uk", 
        title: "Ukrainian"
    },
    {
        type: "language", 
        code: "ur", 
        title: "Urdu"
    },
    {
        type: "language", 
        code: "ug", 
        title: "Uyghur"
    },
    {
        type: "language", 
        code: "uz", 
        title: "Uzbek"
    },
    {
        type: "language", 
        code: "vi", 
        title: "Vietnamese"
    },
    {
        type: "language", 
        code: "wa", 
        title: "Walloon"
    },
    {
        type: "language", 
        code: "cy", 
        title: "Welsh"
    },
    {
        type: "language", 
        code: "fy", 
        title: "Western Frisian"
    },
    {
        type: "language", 
        code: "xh", 
        title: "Xhosa"
    },
    {
        type: "language", 
        code: "yi", 
        title: "Yiddish"
    },
    {
        type: "language", 
        code: "yo", 
        title: "Yoruba"
    },
    {
        type: "language", 
        code: "zu", 
        title: "Zulu"
    }
];