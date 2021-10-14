import { useQuery } from "react-query";
import Loading from "../components/Loading";
import styled from "styled-components";
import { FC } from "react";

interface Props {
  darkThemeEnabled: boolean,
}

const Home: FC<Props> = ({ darkThemeEnabled }) => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://api.jsonbin.io/b/607eee9bf099765deef87896/10").then((res) =>
      res.json()
    )
  );

  if (isLoading) return <Loading />;

  if (error)
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* {"An error has occurred: " + error.message} */}
      </div>
    );

  const ContNo1 = styled.div`
  background-size: 50%;
  position: relative;
  background-position: center;
  padding-bottom: 4.5rem;
    &:before {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: "";
        width: 100%;
        height: 100%;
        opacity: 0.2;
        position: absolute;
        pointer-events: none;        
        background: url(./img/${
          darkThemeEnabled ? "background2.svg" : "background.svg"
        });
    },`;

  const Stats = styled.div`
  display: flex;
  padding: 2rem 2rem 2.5rem;
  position: relative;
  flex-direction: column;
  border-bottom: 1px solid #ddd;
    &:before {
       top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: "";
        width: 100%;
        height: 100%;
        opacity: 0.1;
        position: absolute;
        pointer-events: none;        
        background: url(./img/${
          darkThemeEnabled ? "background2.svg" : "background.svg"
        });
    },`;

  return (
    <div
      className="cont"
      style={{
        background: darkThemeEnabled ? "#1f1f1f" : "transparent",
        borderColor: darkThemeEnabled ? "#333" : "#ccc",
      }}
    >
      {/* *********************** */}
      <div
        className="list_cat"
        style={{
          background: darkThemeEnabled ? "#1f1f1f" : "transparent",
          borderColor: darkThemeEnabled ? "#444" : "#ccc",
        }}
      >
        <ul className="category">
          <li className="selected_cat">Songs</li>
          <li>Artiste</li>
          <li>Videos</li>
          <li>Records</li>
          <li>Awards</li>
        </ul>
        <button className="scroll_cat">
          <i className="uil uil-angle-right-b"></i>
        </button>
      </div>
      {data[0]?.song
        ? data.map((item: any) =>
            Number(item?.position) === 1 ? (
              //   <div className="hero_cont">
              <ContNo1 key={item?._id}>
                <div className="hero">
                  <div
                    className="hero_img"
                    style={{ backgroundImage: `url(${item?.imageUrl})` }}
                  ></div>
                  <div className="no1_song">{item?.song}</div>
                  <div className="no1_arts">{item?.artiste}</div>
                  <div className="no1_position">
                    <p
                      style={{
                        fontVariationSettings: darkThemeEnabled ? '"wght" 700': '"wght" 500',
                        color: darkThemeEnabled ? "#222" : "#000",
                        background: darkThemeEnabled ? "#ccc" : "#eee",
                      }}
                    >
                      {item?.position}
                    </p>
                  </div>
                </div>
              </ContNo1>
            ) : (
              <>
                {Number(item?.position) / 7 === 1 && (
                  <Stats
                    className="stat"
                    style={{
                      borderColor: darkThemeEnabled ? "#333" : "#ddd",
                    }}
                    key={item?._id}
                  >
                    <div className="stat_type">
                      <div className="stat_quote">
                        <p>
                          "Music is the literature of the heart; it commences
                          where speech ends"
                        </p>
                      </div>
                      <div className="quote_author_det">
                        <p>- Mike Awoyemi</p>
                      </div>
                    </div>
                    <div className="stat_info">
                      <div className="stat_sect stat_sect1">
                        <div className="bar1">23%</div>
                        <div className="stat_tit">Teenagers</div>
                      </div>
                      <div className="stat_sect stat_sect2">
                        <div className="bar2">62 %</div>
                        <div className="stat_tit">Famous</div>
                      </div>
                      <div className="stat_sect stat_sect3">
                        <div className="bar3">15%</div>
                        <div className="stat_tit">Icons</div>
                      </div>
                    </div>
                    <div className="view_stat">
                      <div className="view_sect view_sect1">
                        <button
                          className="view_butt"
                          style={{
                            borderColor: darkThemeEnabled ? "#444" : "#ccc",
                          }}
                        >
                          Teenagers list
                        </button>
                      </div>
                      <div className="view_sect view_sect1">
                        <button
                          className="view_butt"
                          style={{
                            borderColor: darkThemeEnabled ? "#444" : "#ccc",
                          }}
                        >
                          Famous list
                        </button>
                      </div>
                      <div className="view_sect view_sect2">
                        <button
                          className="view_butt"
                          style={{
                            borderColor: darkThemeEnabled ? "#444" : "#ccc",
                          }}
                        >
                          Icons list
                        </button>
                      </div>
                    </div>
                  </Stats>
                )}
                <div
                  key={item?._id}
                  className="song"
                  style={{
                    borderTop:
                      Number(item?.position) === 2
                        ? !darkThemeEnabled
                          ? "1px solid #bbb" :"1px solid #444"
                          : "none"
                        ,
                    borderBottomColor: darkThemeEnabled ? "#333" : "#ccc",
                  }}
                >
                  <div className="position">{item?.position}.</div>

                  <div className="song_dets">
                    <div className="sect_one">
                      <div className="song_name">{item?.song}</div>
                      <div className="song_arts">
                        <p>{item?.artiste}</p>
                      </div>
                    </div>
                    <div className="song_charts">
                      {item?.new
                        ? null
                        : Number(item?.lastweek) === Number(item?.position)
                        ? null
                        : Number(item?.lastweek) - Number(item?.position) < 0
                        ? Number(item?.lastweek) - Number(item?.position)
                        : "+" +
                          (
                            Number(item?.lastweek) - Number(item?.position)
                          ).toString()}
                      {item?.new ? (
                        <p style={{ color: "#ff890c", fontSize: "0.75rem" }}>
                          new
                        </p>
                      ) : Number(item?.position) < Number(item?.lastweek) ? (
                        <i
                          className="uil uil-angle-double-up"
                          style={{ color: "green" }}
                        ></i>
                      ) : Number(item?.position) === Number(item?.lastweek) ? (
                        <i
                          className="uil uil-arrows-h-alt"
                          style={{ color: "gray", fontSize: "1rem" }}
                        ></i>
                      ) : (
                        <i
                          className="uil uil-angle-double-down"
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </div>
                  </div>

                  <div className="song_pic">
                    <div
                      className="song_pic_img"
                      style={{ backgroundImage: `url(${item?.imageUrl})` }}
                    ></div>
                  </div>
                </div>
              </>
            )
          )
        : null}
    </div>
  );
};
export default Home;
