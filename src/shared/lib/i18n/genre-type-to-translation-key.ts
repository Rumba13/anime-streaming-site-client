import {GenreType} from "../../types";

type GenreTypeTranslationKeyType =
    | 'action'
    | 'adventure'
    | 'avant_garde'
    | 'award_winning'
    | 'boys_love'
    | 'comedy'
    | 'drama'
    | 'fantasy'
    | 'girls_love'
    | 'gourmet'
    | 'horror'
    | 'mystery'
    | 'romance'
    | 'sci_fi'
    | 'slice_of_life'
    | 'sports'
    | 'supernatural'
    | 'suspense'
    | 'ecchi'
    | 'erotica'
    | 'hentai'
    | 'adult_cast'
    | 'anthropomorphic'
    | 'cgdct'
    | 'childcare'
    | 'combat_sports'
    | 'crossdressing'
    | 'delinquents'
    | 'detective'
    | 'educational'
    | 'gag_humor'
    | 'gore'
    | 'harem'
    | 'high_stakes_game'
    | 'historical'
    | 'idols_female'
    | 'idols_male'
    | 'isekai'
    | 'iyashikei'
    | 'love_polygon'
    | 'magical_sex_shift'
    | 'mahou_shoujo'
    | 'martial_arts'
    | 'mecha'
    | 'medical'
    | 'military'
    | 'music'
    | 'mythology'
    | 'organized_crime'
    | 'otaku_culture'
    | 'parody'
    | 'performing_arts'
    | 'pets'
    | 'psychological'
    | 'racing'
    | 'reincarnation'
    | 'reverse_harem'
    | 'love_status_quo'
    | 'samurai'
    | 'school'
    | 'showbiz'
    | 'space'
    | 'strategy_game'
    | 'super_power'
    | 'survival'
    | 'team_sports'
    | 'time_travel'
    | 'vampire'
    | 'video_game'
    | 'visual_arts'
    | 'workplace'
    | 'urban_fantasy'
    | 'villainess'
    | 'josei'
    | 'kids'
    | 'seinen'
    | 'shoujo'
    | 'shounen';

const genreTypeToTranslationKeyMap: { [key in GenreType]: GenreTypeTranslationKeyType } = {
    "Adult Cast": "adult_cast",
    "Action": "action",
    "Adventure": "adventure",
    "Avant Garde": "avant_garde",
    "Award Winning": "award_winning",
    "Boys Love": "boys_love",
    "Comedy": "comedy",
    "Drama": "drama",
    "Fantasy": "fantasy",
    "Girls Love": "girls_love",
    "Gourmet": "gourmet",
    "Horror": "horror",
    "Mystery": "mystery",
    "Romance": "romance",
    "Sci-Fi": "sci_fi",
    "Slice of Life": "slice_of_life",
    "Sports": "sports",
    "Supernatural": "supernatural",
    "Suspense": "suspense",
    "Ecchi": "ecchi",
    "Erotica": "erotica",
    "Hentai": "hentai",
    "Anthropomorphic": "anthropomorphic",
    "CGDCT": "cgdct",
    "Childcare": "childcare",
    "Combat Sports": "combat_sports",
    "Crossdressing": "crossdressing",
    "Delinquents": "delinquents",
    "Detective": "detective",
    "Educational": "educational",
    "Gag Humor": "gag_humor",
    "Gore": "gore",
    "Harem": "harem",
    "High Stakes Game": "high_stakes_game",
    "Historical": "historical",
    "Idols (Female)": "idols_female",
    "Idols (Male)": "idols_male",
    "Isekai": "isekai",
    "Iyashikei": "iyashikei",
    "Love Polygon": "love_polygon",
    "Magical Sex Shift": "magical_sex_shift",
    "Mahou Shoujo": "mahou_shoujo",
    "Martial Arts": "martial_arts",
    "Mecha": "mecha",
    "Medical": "medical",
    "Military": "military",
    "Music": "music",
    "Mythology": "mythology",
    "Organized Crime": "organized_crime",
    "Otaku Culture": "otaku_culture",
    "Parody": "parody",
    "Performing Arts": "performing_arts",
    "Pets": "pets",
    "Psychological": "psychological",
    "Racing": "racing",
    "Reincarnation": "reincarnation",
    "Reverse Harem": "reverse_harem",
    "Love Status Quo": "love_status_quo",
    "Samurai": "samurai",
    "School": "school",
    "Showbiz": "showbiz",
    "Space": "space",
    "Strategy Game": "strategy_game",
    "Super Power": "super_power",
    "Survival": "survival",
    "Team Sports": "team_sports",
    "Time Travel": "time_travel",
    "Vampire": "vampire",
    "Video Game": "video_game",
    "Visual Arts": "visual_arts",
    "Workplace": "workplace",
    "Urban Fantasy": "urban_fantasy",
    "Villainess": "villainess",
    "Josei": "josei",
    "Kids": "kids",
    "Seinen": "seinen",
    "Shoujo": "shoujo",
    "Shounen": "shounen"
};

export const genreTypeToTranslationKey = (genreType: GenreType) => {
    return genreTypeToTranslationKeyMap[genreType]
}