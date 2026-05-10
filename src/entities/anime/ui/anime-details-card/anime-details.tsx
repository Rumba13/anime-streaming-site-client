import {Anime} from "../../../../shared/types";
import dayjs from "dayjs";
import {dateFormat} from "../../../../shared/lib";
import {getAnimeImage} from "../get-anime-image";
import {
    animeDetailsCardStyles,
    chipStyles,
    chipsRowStyles,
    contentStyles,
    headerStyles,
    brandStyles,
    titleRowStyles,
    idStyles,
    longTextValueStyles,
    posterStyles,
    posterWrapperStyles,
    posterOverlayStyles,
    posterCtaStyles,
    posterSubtextStyles,
    ratingRowStyles,
    scoreStyles,
    starStyles,
    metaLineStyles,
    dotStyles,
    sectionTitleStyles,
    synopsisStyles,
    tabsStyles,
    tabStyles,
    tabActiveStyles,
    thumbsRowStyles,
    thumbCardStyles,
    thumbImageStyles,
    thumbCaptionStyles,
    titleStyles,
} from "./anime-details.styles";
import {useMemo, useState} from "react";

type PropsType = {
    anime: Anime
}

type TabKey = "overview" | "episodes" | "trailers" | "moreLikeThis";

export function AnimeDetailsCard({anime}: PropsType) {
    const animeDuration = anime.duration.replace("per ep", "");
    const airedFrom = anime.aired?.from ? dayjs(anime.aired.from).format(dateFormat) : null;
    const airedTo = anime.aired?.to ? dayjs(anime.aired.to).format(dateFormat) : null;
    const airedValue = (airedFrom || airedTo)
        ? `${airedFrom ?? "?"} — ${airedTo ?? "?"}`
        : (anime.aired?.string || "—");

    const [tab, setTab] = useState<TabKey>("overview");

    const yearLabel = String(anime.year ?? (anime.aired?.from ? dayjs(anime.aired.from).year() : "—"));
    const episodesLabel = anime.episodes ? `${anime.episodes} eps` : "— eps";
    const pgLabel = anime.rating ? String(anime.rating).toUpperCase() : "—";
    const scoreLabel = anime.score ? anime.score.toFixed(1) : "—";

    const thumbs = useMemo(
        () => ([
            {title: "Overview", caption: "Коротко о тайтле и ключевых деталях."},
            {title: "Episodes", caption: "Эпизоды, длительность и статус выхода."},
            {title: "Trailers & more", caption: "Трейлер и дополнительные материалы."},
            {title: "More like this", caption: "Подборка по жанрам и темам."},
        ]),
        [],
    );

    return <div css={animeDetailsCardStyles}>
        <div css={posterWrapperStyles}>
            <img css={posterStyles} src={getAnimeImage(anime.images)} alt={anime.title}/>
            <div css={posterOverlayStyles}>
                <button css={posterCtaStyles} type="button">Resume</button>
                <p css={posterSubtextStyles}>
                    {anime.background || anime.synopsis || "—"}
                </p>
            </div>
        </div>

        <div css={contentStyles}>
            <div css={headerStyles}>
                <div css={brandStyles}>ANIME ORIGINAL</div>
                <div css={titleRowStyles}>
                    <h2 css={titleStyles}>{anime.title}</h2>
                    <span css={idStyles}>#{anime.mal_id}</span>
                </div>

                <div css={ratingRowStyles}>
                    <span css={scoreStyles} title={anime.score ? `${anime.score}` : "—"}>
                        {scoreLabel}
                        <svg css={starStyles} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path
                                d="M12 17.3l-6.18 3.4 1.18-6.9L1.99 8.9l6.94-1.01L12 1.6l3.07 6.29 6.94 1.01-5.01 4.9 1.18 6.9L12 17.3z"
                                fill="#F5C542"
                            />
                        </svg>
                    </span>
                    <span css={metaLineStyles}>
                        <span>{yearLabel}</span>
                        <span css={dotStyles} />
                        <span title={String(anime.episodes ?? "")}>{episodesLabel}</span>
                        <span css={dotStyles} />
                        <span title={String(anime.rating)}>{pgLabel}</span>
                        <span css={dotStyles} />
                        <span title={anime.type}>{anime.type || "—"}</span>
                    </span>
                </div>
            </div>

            <div css={tabsStyles}>
                <button
                    type="button"
                    css={[tabStyles, tab === "overview" && tabActiveStyles]}
                    onClick={() => setTab("overview")}
                >
                    Overview
                </button>
                <button
                    type="button"
                    css={[tabStyles, tab === "episodes" && tabActiveStyles]}
                    onClick={() => setTab("episodes")}
                >
                    Episode
                </button>
                <button
                    type="button"
                    css={[tabStyles, tab === "trailers" && tabActiveStyles]}
                    onClick={() => setTab("trailers")}
                >
                    Trailers & more
                </button>
                <button
                    type="button"
                    css={[tabStyles, tab === "moreLikeThis" && tabActiveStyles]}
                    onClick={() => setTab("moreLikeThis")}
                >
                    More like this
                </button>
            </div>

            {tab === "overview" && (
                <>
                    <h3 css={sectionTitleStyles}>Synopsis</h3>
                    <p css={synopsisStyles}>{anime.synopsis || "—"}</p>

                    <h3 css={sectionTitleStyles}>Genres</h3>
                    <div css={chipsRowStyles}>
                        {anime.genres?.length
                            ? anime.genres.map((g) => (
                                <span key={String(g.mal_id)} css={chipStyles} title={String(g.name)}>
                                    {g.name}
                                </span>
                            ))
                            : <span css={chipStyles}>—</span>
                        }
                    </div>
                </>
            )}

            {tab === "episodes" && (
                <>
                    <h3 css={sectionTitleStyles}>Episodes</h3>
                    <p css={synopsisStyles}>
                        {episodesLabel}{animeDuration ? ` • ${animeDuration.trim()}` : ""}{anime.status ? ` • ${anime.status}` : ""}
                    </p>
                    <h3 css={sectionTitleStyles}>Aired</h3>
                    <p css={synopsisStyles}>{airedValue}</p>
                    <h3 css={sectionTitleStyles}>Japanese title</h3>
                    <p css={synopsisStyles}>{anime.title_japanese || "—"}</p>
                </>
            )}

            {tab === "trailers" && (
                <>
                    <h3 css={sectionTitleStyles}>Trailers</h3>
                    <p css={synopsisStyles}>
                        {anime.trailer ? (
                            <a href={anime.trailer} target="_blank" rel="noreferrer">
                                Открыть трейлер
                            </a>
                        ) : "—"}
                    </p>
                    <h3 css={sectionTitleStyles}>Background</h3>
                    <p css={synopsisStyles}>{anime.background || "—"}</p>
                </>
            )}

            {tab === "moreLikeThis" && (
                <>
                    <h3 css={sectionTitleStyles}>More like this</h3>
                    <p css={synopsisStyles}>
                        Великие жанры
                    </p>
                    <div css={chipsRowStyles}>
                        {anime.genres?.length
                            ? anime.genres.map((g) => (
                                <span key={String(g.mal_id)} css={chipStyles} title={String(g.name)}>
                                    {g.name}
                                </span>
                            ))
                            : <span css={chipStyles}>—</span>
                        }
                    </div>
                </>
            )}

            <h3 css={sectionTitleStyles} style={{marginTop: 16}}>Title synonyms</h3>
            <p css={longTextValueStyles}>
                {anime.title_synonyms?.length ? anime.title_synonyms.join(", ") : "—"}
            </p>

            <div css={thumbsRowStyles}>
                {thumbs.map((t) => (
                    <div key={t.title} css={thumbCardStyles}>
                        <img css={thumbImageStyles} src={getAnimeImage(anime.images)} alt={anime.title}/>
                        <div css={thumbCaptionStyles}>
                            <strong style={{color: "#fff"}}>{t.title}</strong>
                            <div>{t.caption}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
}