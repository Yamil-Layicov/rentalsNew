import { useEffect, useState } from "react";
import MapNavbar from "../../components/mapNavbar/MapNavbar";
import { svgPaths } from "./svgData";
import api from "../../api/posts";

const Map = () => {
  const [selected, setSelected] = useState(null);
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    const fetchSingleRoom = async () => {
      try {
        const response = await api.get(
          `map/rooms?options[company_id]=01J678FWHY7A2C7MJDMRCF91KZ&options[floor_id]=01J67AREJ7JWTRZ26G23QZJ0CC&options[year]=2024&options[month]=10`
        );
        console.log(response?.data);
      } catch (error) {
        console.error("Error fetching the room data:", error);
      }
    };

    fetchSingleRoom();
  }, []);

  const handleClick = (item) => {
    setSelected(item);
    console.log(item);
  };

  return (
    <div>
      <MapNavbar />
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 2551.18 1133.86"
        style={{ enableBackground: "new 0 0 2551.18 1133.86" }}
        xmlSpace="preserve"
      >
        <style>
          {`
            .st0{fill:none;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}
            .st1{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}
            .st2{fill:#D2EDF3;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}
            .st3{fill:#C5BD97;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}
            .st4{fill:#E4DEEB;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}
            .st5{fill:#ECF0DE;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}
            .st6{fill:#DDD9C4;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}
            .st7{fill:#FDE8D8;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}
            .st8{fill:#C5D9F0;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}
            .st9{fill:#FCF9CE;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}
            .st10{fill:#ECF0DE;stroke:#000000;stroke-width:4;stroke-miterlimit:10;}
            .st11{fill:#F1DCDA;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}
            .st12{fill:#FFFFFF;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}
            .st13{fill:#F6EB14;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}
            .st14{fill:#F6EB14;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}
          `}
        </style>
        <polygon
          class="st0"
          points="316.11,91.72 317.45,1037.08 2224.01,1031.47 2224.11,91.72 2045.44,91.72 2044.55,115.28 
	1429.44,115.28 1430.33,17.5 1053.24,18.66 1053.24,111.28 476.27,113.95 476.73,91.74 "
        />
        <line class="st1" x1="431.61" y1="146.39" x2="316.11" y2="146.39" />
        <g>
          <rect
            x="314.29"
            y="93.76"
            transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 525.3743 -223.18)"
            class="st1"
            width="119.98"
            height="114.67"
          />
          <line class="st1" x1="405.03" y1="91.74" x2="405.03" y2="211.72" />
          <line class="st1" x1="373.61" y1="92.38" x2="373.61" y2="211.09" />
          <line class="st1" x1="341.57" y1="91.74" x2="341.57" y2="211.72" />
        </g>
        <line class="st1" x1="1333.14" y1="150.29" x2="1246.79" y2="150.29" />
        <rect
          x="1234.85"
          y="106.09"
          transform="matrix(-2.505269e-14 1 -1 -2.505269e-14 1439.6735 -1140.2582)"
          class="st1"
          width="110.24"
          height="87.24"
        />
        <line class="st1" x1="1308.83" y1="95.17" x2="1308.83" y2="205.41" />
        <line class="st1" x1="1281.83" y1="95.76" x2="1281.83" y2="204.83" />
        <line class="st1" x1="1265.08" y1="95.17" x2="1265.08" y2="205.41" />
        <g>
          <rect
            x="316.82"
            y="936.48"
            transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 747.0685 1973.5587)"
            class="st1"
            width="113.44"
            height="100.59"
          />
          <line class="st1" x1="429.65" y1="1013.75" x2="316.21" y2="1013.75" />
          <line class="st1" x1="429.05" y1="986.19" x2="316.82" y2="986.19" />
          <line class="st1" x1="429.65" y1="958.09" x2="316.21" y2="958.09" />
        </g>
        <polygon
          class="st2"
          points="476.5,111.28 476.5,211.72 510.71,211.72 510.71,354.83 612.2,354.83 612.2,297.94 1053.24,296.17 
	1053.24,111.28 "
        />
        {/* rect */}

        {svgPaths?.map((item) => (
          <rect
            key={item.uid}
            {...item}
            style={{
              fill: selected?.uid === item?.uid ? "rgb(28, 60, 58)" : " ",
            }}
            onClick={() => handleClick(item)}
          />
        ))}

        {/* rect */}

        <polygon
          class="st7"
          points="1429.39,111.28 2045.39,111.28 2045.39,91.72 2225.5,91.72 2225.5,375.57 1974.28,375.57 
	1974.28,297.05 1429.39,297.05 "
        />
        <polygon
          class="st2"
          points="1975.17,616.17 1975.17,737.05 2130.72,737.05 2130.72,812.61 2223.78,812.61 2225.5,616.17 "
        />
        <polygon
          class="st2"
          points="1820.5,808.76 2022.28,808.76 2022.28,852.61 2076.5,852.61 2079.17,1033.94 1820.5,1033.94 "
        />
        <polygon
          class="st10"
          points="528.94,808.76 1169.24,808.76 1169.24,877.5 1024.05,877.5 1024.43,895.05 611.61,894.39 
	611.91,876.91 528.94,879.28 "
        />
        <rect
          x="640.05"
          y="934.39"
          class="st10"
          width="135.11"
          height="100.59"
        />
        <rect
          x="775.17"
          y="934.39"
          class="st10"
          width="158.22"
          height="99.56"
        />
        <polygon
          class="st10"
          points="1047.17,1034.46 1047.17,962.46 988.5,962.46 988.5,934.91 933.39,934.91 933.39,1034.46 "
        />
        <polygon
          class="st11"
          points="316.94,211.09 316.94,782.83 431.61,782.83 431.61,737.05 609.39,737.05 612.2,354.83 510.28,354.83 
	510.28,211.72 "
        />
        <rect
          x="2079.17"
          y="921.35"
          class="st12"
          width="79.99"
          height="112.59"
        />
        <rect
          x="2159.16"
          y="921.35"
          class="st12"
          width="64.86"
          height="112.59"
        />
        <rect
          x="1281.39"
          y="934.39"
          class="st12"
          width="123.11"
          height="99.56"
        />
        <line class="st1" x1="372.93" y1="1037.08" x2="372.93" y2="935.33" />
        <g>
          <g>
            <rect
              x="469.77"
              y="1036.75"
              transform="matrix(-1 -4.053458e-14 4.053458e-14 -1 1210.2443 2148.9072)"
              class="st1"
              width="270.7"
              height="75.41"
            />
            <line
              class="st1"
              x1="739.04"
              y1="1094.67"
              x2="468.34"
              y2="1094.67"
            />
            <line
              class="st1"
              x1="737.6"
              y1="1074.02"
              x2="469.77"
              y2="1074.02"
            />
            <line
              class="st1"
              x1="739.04"
              y1="1052.95"
              x2="468.34"
              y2="1052.95"
            />
          </g>
          <line class="st1" x1="608.62" y1="1109.32" x2="608.62" y2="1032.88" />
        </g>
        <rect x="337.09" y="904.93" class="st13" width="38.68" height="30.41" />
        <g>
          <g>
            <rect
              x="1168.55"
              y="932.04"
              transform="matrix(-1 -8.050261e-14 8.050261e-14 -1 2450.5403 1964.6663)"
              class="st0"
              width="113.44"
              height="100.59"
            />
            <line
              class="st0"
              x1="1281.39"
              y1="1009.31"
              x2="1167.95"
              y2="1009.31"
            />
            <line
              class="st0"
              x1="1280.79"
              y1="981.75"
              x2="1168.55"
              y2="981.75"
            />
            <line
              class="st0"
              x1="1281.39"
              y1="953.64"
              x2="1167.95"
              y2="953.64"
            />
          </g>
          <line class="st0" x1="1224.67" y1="1033.94" x2="1224.67" y2="932.2" />
          <rect
            x="1224.3"
            y="904.54"
            class="st13"
            width="57.69"
            height="27.5"
          />
        </g>
        <rect
          x="1326.62"
          y="118.24"
          transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 1473.1633 -1215.3427)"
          class="st14"
          width="35.27"
          height="21.33"
        />
        <rect x="1053.24" y="19.18" class="st1" width="376.15" height="75.41" />
        <line class="st1" x1="1429.97" y1="75.42" x2="1052.15" y2="75.42" />
        <line class="st1" x1="1431.06" y1="54.76" x2="1052.15" y2="54.76" />
        <line class="st1" x1="1429.97" y1="33.69" x2="1052.15" y2="33.69" />
        <line class="st1" x1="1246.35" y1="95.11" x2="1246.35" y2="18.66" />
        <line class="st1" x1="1103.46" y1="204.83" x2="1246.35" y2="204.83" />
        <line class="st1" x1="1103.46" y1="296.76" x2="1281.83" y2="296.76" />
        <rect
          x="316.94"
          y="782.83"
          class="st12"
          width="56.96"
          height="100.15"
        />
        <rect
          x="373.91"
          y="782.83"
          class="st12"
          width="56.96"
          height="100.15"
        />
        <polygon
          class="st6"
          points="528.94,876.91 528.94,935.57 988.2,935.57 988.2,960.46 1045.68,960.46 1045.68,1033.94 
	1122.13,1033.94 1122.13,936.76 1024.94,935.57 1024.94,894.68 611.91,895.87 611.91,876.91 "
        />
      </svg>
    </div>
  );
};

export default Map;
