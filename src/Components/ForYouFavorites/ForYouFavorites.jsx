import { useState } from 'react';
import './ForYouFavorites.css';
import { RiAccountCircleFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { spaceInfos, spotsList, topPicks } from '../../utils';
import Footer from '../Footer/Footer';

const ForYouFavorites = () => {
  const [forYouFavorites, setForYouFavorites] = useState('spaces');

  return (
    <div className="spaces-container">
      <div className="forYouFavorites-morphism-bg">
        <h1>
          <span 
            style={{ marginRight: '50px' }} 
            onClick={() => setForYouFavorites('spaces')}
          >
            For You
          </span>
          <span 
            onClick={() => setForYouFavorites('spots')}
          >
            Favourites
          </span>
        </h1>
        <div>
          {forYouFavorites === 'spaces'
            ? spaceInfos.map((spaceInfo) => (
                <div 
                  className="spaceDesign-container" 
                  key={spaceInfo.id}
                  style={{ backgroundImage: `url(${spaceInfo.img})` }}
                >
                  <div className="spaceDesign-container-overlay">
                    <div className="spaceTop-info">
                      {spaceInfo.profilePics ? (
                        <img src={spaceInfo.profilePics} alt="profilePic" />
                      ) : (
                        <RiAccountCircleFill className="space-profile-logo" />
                      )}
                      <div>
                        <p>{spaceInfo.spaceName}</p>
                        <p>{spaceInfo.followers} Followers</p>
                      </div>
                      <button>Follow</button>
                    </div>

                    <div className="spaceButtom-info">
                      <div className="spaceButtom-infoP">
                        <p>
                          {spaceInfo.spaceDescription}{" "}
                          <span style={{ cursor: 'pointer' }}>See more</span>
                        </p>
                        <div>
                          <FaUserFriends className="space-friend-logo" />
                          <p>{spaceInfo.friends} friends here</p>
                        </div>
                      </div>
                      <button>Hop in</button>
                    </div>
                  </div>
                </div>
              ))
            : spotsList.map((spot) => (
                <div
                  className="spaceDesign-container"
                  key={spot.id}
                  style={{ backgroundImage: `url(${spot.img})` }}
                >
                  <div className="spaceDesign-container-overlay">
                    <div className="spaceTop-info">
                      {spot.profilePics ? (
                        <img src={spot.profilePics} alt="profilePic" />
                      ) : (
                        <RiAccountCircleFill className="space-profile-logo" />
                      )}
                      <div>
                        <p>{spot.spaceName}</p>
                        <p>{spot.followers} Followers</p>
                      </div>
                      <button>Follow</button>
                    </div>

                    <div className="spaceButtom-info">
                      <div className="spaceButtom-infoP">
                        <p>
                          {spot.spaceDescription}{" "}
                          <span style={{ cursor: 'pointer' }}>See more</span>
                        </p>
                        <div>
                          <FaUserFriends className="space-friend-logo" />
                          <p>{spot.friends} friends here</p>
                        </div>
                      </div>
                      <button>Hop in</button>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        <h1>Blockchain</h1>
        <a href="/quiz/753688375357">
          <div style={{textDecoration: 'none', color: '#ffffff'}}>
            {topPicks.map((topPick) => (
              <div
                className="topPicks-container"
                key={topPick.id}
                style={{ backgroundImage: `url(${topPick.img})` }}
              >
                <div className="topPicks-container-overlay">
                  <div>
                    <RiAccountCircleFill className="space-profile-logo" />
                    <div>
                      <p>{topPick.channelName}</p>
                      <p>{topPick.connects} connects</p>
                    </div>
                  </div>
                  <div>
                    <p>About</p>
                    <p>
                      {topPick.channelDescription} See more
                    </p>
                  </div>
                  <div>
                    <div>
                      <FaUserFriends />
                      <p>{topPick.commonConnects} connects in common</p>
                    </div>
                    <button>Connect</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </a>

        <h1>Sciences</h1>
        <div>
          {topPicks.map((topPick) => (
            <div
              className="topPicks-container"
              key={topPick.id}
              style={{ backgroundImage: `url(${topPick.img})` }}
            >
              <div className="topPicks-container-overlay">
                <div>
                  <RiAccountCircleFill className="space-profile-logo" />
                  <div>
                    <p>{topPick.channelName}</p>
                    <p>{topPick.connects} connects</p>
                  </div>
                </div>
                <div>
                  <p>About</p>
                  <p>
                    {topPick.channelDescription} See more
                  </p>
                </div>
                <div>
                  <div>
                    <FaUserFriends />
                    <p>{topPick.commonConnects} connects in common</p>
                  </div>
                  <button>Connect</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h1>Technology</h1>
        <div>
          {topPicks.map((topPick) => (
            <div
              className="topPicks-container"
              key={topPick.id}
              style={{ backgroundImage: `url(${topPick.img})` }}
            >
              <div className="topPicks-container-overlay">
                <div>
                  <RiAccountCircleFill className="space-profile-logo" />
                  <div>
                    <p>{topPick.channelName}</p>
                    <p>{topPick.connects} connects</p>
                  </div>
                </div>
                <div>
                  <p>About</p>
                  <p>
                    {topPick.channelDescription} See more
                  </p>
                </div>
                <div>
                  <div>
                    <FaUserFriends />
                    <p>{topPick.commonConnects} connects in common</p>
                  </div>
                  <button>Connect</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForYouFavorites;
