
const token = 'BQA0VSMxSx0GPf8Ct4WcuBD-zFIZeeU-lipJCB2o_CU80qwTIlTZ_wXC-deYWX_KmlAq7yeOFc3iKErYwpy9Ys4AOX_PZ5x2wGbroRP7MXcvIzD-2Nl_XNErvELuiGeLW2qt7Z9pL-TjwgqIU60Ht5FLFzqtGNbZfVwFqR37frKZyRRnvLxM2jvB02oxcIBco48Ef5qMoDptuM-XpaakU74Lgt5pymo1SPRpbzRwlV_o_suB9Lf5v1YjfRtQ9DP7Y2ahP4GIz1R0VygA0ge0EpWBN-nfn3SXds-b6LU-AWcZeUGWgl1377DpbhHg';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotif/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);