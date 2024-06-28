import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { components } from "react-select";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import CustomDatePickerInput from "./CustomDatePickerInput";
// import "./App.css";

const TurfDetails = () => {
  const cityData = [
    {
      cityName: "Coimbatore",
      areas: [
        {
          areaName: "Singanallur",
          venues: [
            {
              place: "5th Yard",
              sportsAvailable: ["Football", "Basketball"],
              image: [
                "https://lh5.googleusercontent.com/p/AF1QipM7IgayQcQkYS4It-pfNK-jEpj2HFkJRDhHaqfG=w426-h240-k-no",
              ],
              location:
                "https://www.google.com/maps/place/5th+yard+-+Football+turf/@11.0003085,77.0192572,17z/data=!4m14!1m7!3m6!1s0x3ba8572a199d2c13:0x4dd7a9d85d5ec896!2s5th+yard+-+Football+turf!8m2!3d11.0003085!4d77.0218321!16s%2Fg%2F11n0j7fwpw!3m5!1s0x3ba8572a199d2c13:0x4dd7a9d85d5ec896!8m2!3d11.0003085!4d77.0218321!16s%2Fg%2F11n0j7fwpw?entry=ttu",
              address:
                "20/3, Venkata Lakshmi Nagar, Chellandy Amman Nagar, Kallimadai, Singanallur, Tamil Nadu 641005",
              time: "04.00 AM - 11:59 PM",
              groundType: "Turf",
              policies: [
                "* All bookings must be made at least 24 hours in advance. *Full payment is required at the time of booking. *Cancellations made within 24 hours of the booking will incur a 50% cancellation fee.",
              ],
              amenities: [
                "Water",
                "Restroom",
                "FirstAid",
                "Parking",
                "CCTV",
                "Shower",
                "Music",
                "Dressing Room",
              ],
              photos: [""],
            },
            {
              place: "VR Turf",
              sportsAvailable: ["Football"],
              image: [
                "https://lh5.googleusercontent.com/p/AF1QipN-WXHifDK2xBAPsGugdMDEu5wr80E8T9jc8wb_=w213-h160-k-no",
              ],
              location: [
                "https://www.google.com/maps/place/VR+turf/@11.0069876,77.035002,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba857f95f6778e9:0xa0505cd071dad75a!8m2!3d11.0069876!4d77.0375769!16s%2Fg%2F11y390wb3_?entry=ttu",
              ],
              address: "VR Turf, Singanallur, Tamil Nadu 641005",
              time: "9.00 AM - 8:00 PM",
              groundType: "Turf",
              amenities: [
                "Water",
                "Restroom",
                "FirstAid",
                "Parking",
                "CCTV",
                "Shower",
                "Music",
                "Dressing Room",
              ],
            },
          ],
        },
        {
          areaName: "Kallimadai",
          venues: [
            {
              place: "FootWork Sports Turf",
              sportsAvailable: ["Football"],
              image: [
                "https://lh5.googleusercontent.com/p/AF1QipNOJnEk3M7mbly4nHztaY0X9xXeCrkQnU0o8-Y1=w141-h141-n-k-no-nu",
              ],
              location: [
                "https://www.google.com/maps/place/FootWork+Sports+Turf/@10.9968683,77.01005,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba857f086259fd7:0x8c41fc71e5aa6913!8m2!3d10.9968683!4d77.0126249!16s%2Fg%2F11gh6c8twq?entry=ttu",
              ],
              address:
                "FootWork Sports Turf, Kallimadai, Coimbatore, Tamil Nadu 641005",
              time: "6.00 AM - 10:00 PM",
              groundType: "Turf",
            },
          ],
        },
        {
          areaName: "Nava India Rd",
          venues: [
            {
              place: "Hindusthan Football Turf",
              sportsAvailable: ["Football"],
              image: [
                "https://lh3.googleusercontent.com/p/AF1QipMoqi0WtEBFCPhEajBfhoknIcsWKgiUBASY464S=s1360-w1360-h1020",
              ],
              location: [
                "https://www.google.com/maps/place/Hindusthan+Football+Turf/@11.0122413,76.9925662,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba859ecdfb33b3d:0xf58a4015e845f2bc!8m2!3d11.0122413!4d76.9951411!16s%2Fg%2F11srkz5rjs?entry=ttu",
              ],
              address:
                "Hindusthan Football Turf, Nava India Rd, Coimbatore, Tamil Nadu 641005",
              time: "7.00 AM - 11:00 PM",
              groundType: "Turf",
            },
          ],
        },
        {
          areaName: "Udayampalayam",
          venues: [
            {
              place: "Kovai Arena",
              sportsAvailable: ["Cricket", "Football"],
              image: [
                "https://lh3.googleusercontent.com/p/AF1QipNRraRfqAPGld6FYoNPEhbRhq1Kd6GUSzEBKCew=s1360-w1360-h1020",
              ],
              location: [
                "https://www.google.com/maps/place/Kovai+Arena+-+Football+Turf/@11.0056549,77.0003642,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba859da04551651:0xd3c393b0b1bea148!8m2!3d11.0056549!4d77.0029391!16s%2Fg%2F11mxybxmzt?entry=ttu",
              ],
              address:
                "Kovai Arena, Udayampalayam, Coimbatore, Tamil Nadu 641005",
              time: "8.00 AM - 9:00 PM",
              groundType: "Turf",
            },
          ],
        },
        {
          areaName: "Pappanaickenpalayam",
          venues: [
            {
              place: "Area 641",
              sportsAvailable: ["Football", "Cricket"],
              image: [
                "https://lh3.googleusercontent.com/p/AF1QipN8446nfMy81wq4Bara3PNQt6H-hTduE9Wv2KiS=s1360-w1360-h1020",
              ],
              location: [
                "https://www.google.com/maps/place/Area+641/@11.0125529,76.9907575,16.26z/data=!4m6!3m5!1s0x3ba859cb08f469b1:0x66f222930649bd0d!8m2!3d11.0124596!4d76.9909949!16s%2Fg%2F11f3m84j25?entry=ttu",
              ],
              address:
                "Area 641, Pappanaickenpalayam, Coimbatore, Tamil Nadu 641005",
              time: "7.00 AM - 10:00 PM",
              groundType: "Turf",
            },
          ],
        },
        {
          areaName: "Brindhavan Nagar, (Civil Aerodrome Post)",
          venues: [
            {
              place: "One More Game",
              sportsAvailable: ["Football"],
              image: [
                "https://lh3.googleusercontent.com/p/AF1QipNjehK9sWQ1xi6uiY3Rq-RHYoid4hqoIJLZlees=s1360-w1360-h1020",
              ],
              location: [
                "https://www.google.com/maps/place/One+More+Game/@11.0246559,77.0289224,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba857779526915b:0x5e08dfd1b405b96c!8m2!3d11.0246559!4d77.0337933!16s%2Fg%2F11rtvkl1dr?entry=ttu",
              ],
              address:
                "One More Game, Brindhavan Nagar, (Civil Aerodrome Post), Coimbatore, Tamil Nadu 641005",
              time: "10.00 AM - 6:00 PM",
              groundType: "Turf",
            },
            {
              place: "Goal Street",
              sportsAvailable: ["Football", "Basketball"],
              image: [
                "https://lh3.googleusercontent.com/p/AF1QipOPPochTqk7husLGioc21WOIJqrrxy8_pC7AFPo=s1360-w1360-h1020",
              ],
              location: [
                "https://www.google.com/maps/place/Goal+Street/@11.0334519,77.0297045,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba857e2c7af173d:0x6b646003e3f240be!8m2!3d11.0334519!4d77.0322794!16s%2Fg%2F11pvfbrvk8?entry=ttu",
              ],
              address:
                "Goal Street, Brindhavan Nagar, (Civil Aerodrome Post), Coimbatore, Tamil Nadu 641005",
              time: "12.00 PM - 8:00 PM",
              groundType: "Turf",
            },
          ],
        },
        {
          areaName: "Madhusudhan Layout, (TNHB)",
          venues: [
            {
              place: "Warrior Turf",
              sportsAvailable: ["Football"],
              image: [
                "https://lh3.googleusercontent.com/p/AF1QipNnd7raTBXro3W7Pm1xFCyJRtTYJfn671eYJD1-=s1360-w1360-h1020",
              ],
              location: [
                "https://www.google.com/maps/place/Warrior+Turf+And+Cafe/@11.0378632,77.0369348,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba857002b1ece97:0x9b4628162f485c81!8m2!3d11.0378632!4d77.0395097!16s%2Fg%2F11vy_zpvxz?entry=ttu",
              ],
              address:
                "Warrior Turf, Madhusudhan Layout, (TNHB), Coimbatore, Tamil Nadu 641005",
              time: "6.00 AM - 10:00 PM",
              groundType: "Turf",
            },
          ],
        },
        {
          areaName: "Chinniampalayam",
          venues: [
            {
              place: "Detox Street",
              sportsAvailable: ["Football"],
              image: [
                "https://lh3.googleusercontent.com/p/AF1QipOagFspFUyBygBFWJvg2wulcpWe0clb9N1MCwuX=s1360-w1360-h1020",
              ],
              loaction: [
                "https://www.google.com/maps/place/Detox+Street/@11.049435,77.0488574,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba857dd0d3d6c79:0x1436d8d6ce6cecc9!8m2!3d11.049435!4d77.0514323!16s%2Fg%2F11l1nzd3cf?entry=ttu",
              ],
              address:
                "Detox Street, Chinniampalayam, Coimbatore, Tamil Nadu 641005",
              time: "6.00 AM - 10:00 PM",
              groundType: "Turf",
            },
          ],
        },
        {
          areaName: "Thirumurugan Nagar",
          venues: [
            {
              place: "Turf Genesis",
              sportsAvailable: ["Football"],
              image: [
                "https://lh3.googleusercontent.com/p/AF1QipNfvplWKqWiKWUxA5xb-13mOk0jT9yQiBDnTXS7=s1360-w1360-h1020",
              ],
              location: [
                "https://www.google.com/maps/place/Turf+Genesis/@11.0571982,77.038051,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba857f310fb5883:0x9a966238a8b52516!8m2!3d11.0571982!4d77.0406259!16s%2Fg%2F11n6vnshhr?entry=ttu",
              ],
              address:
                "Turf Genesis, Thirumurugan Nagar, Coimbatore, Tamil Nadu 641005",
              time: "6.00 AM - 10:00 PM",
              groundType: "Turf",
            },
          ],
        },
        {
          areaName: "Avarampalayam",
          venues: [
            {
              place: "Sportpod",
              sportsAvailable: ["Football"],
              image: [
                "https://lh3.googleusercontent.com/p/AF1QipMg0tKXnwGbaa04mFHMkKXRHU4inPSZPDzuWg5v=s1360-w1360-h1020",
              ],
              location: [
                "https://www.google.com/maps/place/SportPod/@11.0247864,76.9824694,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba85977e22e13b5:0xdf5bd6ed6996fe32!8m2!3d11.0247864!4d76.9873403!16s%2Fg%2F11st686d5m?entry=ttu",
              ],
              address: "Sportpod, Avarampalayam, Coimbatore, Tamil Nadu 641005",
              time: "6.00 AM - 10:00 PM",
              groundType: "Turf",
            },
          ],
        },
        {
          areaName: "Peelamedu",
          venues: [
            {
              place: "Playmakers Football Academy",
              sportsAvailable: ["Football"],
              image: [
                "https://lh3.googleusercontent.com/p/AF1QipNl1fCZfcXXZfEdjtPWo9RPbpPK4q2_HUX4piV2=s1360-w1360-h1020",
              ],
              location: [
                "https://www.google.com/maps/place/Playmakers+Football+Academy+(Coimbatore)/@11.0374092,77.0166242,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba8570bd7238835:0xf4222984fe53910c!8m2!3d11.0374092!4d77.0191991!16s%2Fg%2F11s58kd4g8?entry=ttu",
              ],
              address:
                "Playmakers Football Academy, Peelamedu, Coimbatore, Tamil Nadu 641005",
              time: "6.00 AM - 10:00 PM",
              groundType: "Turf",
            },
            {
              place: "FE Sports Zone",
              sportsAvailable: ["Football"],
              image: [
                "https://lh3.googleusercontent.com/p/AF1QipP8l3UlzSSxEmX0luP7TUdpjouZXrq13gdp5scO=s680-w680-h510",
              ],
              location: [
                "https://www.google.com/maps/place/FE+Sports+Zone+%7C+Super+Kings+Academy+Coimbatore+(SKA+Coimbatore)/@11.0377345,77.0166023,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba857fc1fc45bfd:0x27f2651ab00811b9!8m2!3d11.0377345!4d77.0191772!16s%2Fg%2F11hsq0gmk4?entry=ttu",
              ],
              address:
                "FE Sports Zone, Peelamedu, Coimbatore, Tamil Nadu 641005",
              time: "6.00 AM - 10:00 PM",
              groundType: "Turf",
            },
          ],
        },
        {
          areaName: "Sanganoor",
          venues: [
            {
              place: "Spin City Turf",
              sportsAvailable: ["Football"],
              image: [
                "https://lh3.googleusercontent.com/p/AF1QipOlXW-bdelRE5Al-GQM1gxuh8SbUdzBj-oqXXqr=s1360-w1360-h1020",
              ],
              location: [
                "https://www.google.com/maps/place/Spin+City+Turf/@11.0359857,76.9606774,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba85977b1ed8d91:0x86830fa55ada8bbf!8m2!3d11.0359857!4d76.9632523!16s%2Fg%2F11vl94x1l2?entry=ttu",
              ],
              address:
                "Spin City Turf, Sanganoor, Coimbatore, Tamil Nadu 641005",
              time: "6.00 AM - 10:00 PM",
              groundType: "Turf",
            },
            {
              place: "6 Feathers Badminton Court",
              sportsAvailable: ["Badminton"],
              image: [
                "https://lh3.googleusercontent.com/p/AF1QipOHN9h5KEZvMyRYHJuWMjk59TkQd4EOkxylYbCu=s1360-w1360-h1020",
              ],
              location: [
                "https://www.google.com/maps/place/6+Feathers+Badminton+Court/@11.0382956,76.9545994,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba8588ca45daad1:0x65a251d408baa858!8m2!3d11.0382956!4d76.9571743!16s%2Fg%2F11dxh7tqxk?entry=ttu",
              ],
              address:
                "6 Feathers Badminton Court, Sanganoor, Coimbatore, Tamil Nadu 641005",
              time: "6.00 AM - 10:00 PM",
              groundType: "Indoor",
            },
          ],
        },
        {
          areaName: "Kalapatti-Kurumbapalayam Rd",
          venues: [
            {
              place: "Spartan Turf",
              sportsAvailable: ["Football"],
              image: [
                "https://lh3.googleusercontent.com/p/AF1QipPZcZoe_lNI0RA1ZvNc8n7-5NFOuIpziLU-f0RS=s1360-w1360-h1020",
              ],
              location: [
                "https://www.google.com/maps/place/Spartan+Turf/@11.0872313,77.0305009,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba8f948dbd3788f:0x484dbe6e7cbea99c!8m2!3d11.0872313!4d77.0330758!16s%2Fg%2F11s8n0ggdx?entry=ttu",
              ],
              address:
                "Spartan Turf, Kalapatti-Kurumbapalayam Rd, Coimbatore, Tamil Nadu 641005",
              time: "6.00 AM - 10:00 PM",
              groundType: "Turf",
            },
            {
              place: "YUGA SPORTS",
              sportsAvailable: ["Football"],
              image: [
                "https://lh3.googleusercontent.com/p/AF1QipNB6Up2JAl8zJJD4lunzwuqYTegI2Nq4ocexWPD=s1360-w1360-h1020",
              ],
              location: [
                "https://www.google.com/maps/place/YUGA+SPORTS/@11.0933101,77.0288406,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba8f9fd7ef41203:0x3c9f9e73aacf3fc9!8m2!3d11.0933101!4d77.0314155!16s%2Fg%2F11svc9p9gp?entry=ttu",
              ],
              address:
                "YUGA SPORTS, Kalapatti-Kurumbapalayam Rd, Coimbatore, Tamil Nadu 641005",
              time: "6.00 AM - 10:00 PM",
              groundType: "Turf",
            },
          ],
        },
        {
          areaName: "Vadavalli",
          venues: [
            {
              place: "Marutham Sports Arena",
              sportsAvailable: ["Football"],
              image: [
                "https://lh3.googleusercontent.com/p/AF1QipOcXw-nGYjkOpgbYu2kU1Ky1FccPNPXDlm_ltak=s1360-w1360-h1020",
              ],
              location: [
                "https://www.google.com/maps/place/Marutham+Sports+Arena+-+Football+Turf,+Astro+Cricket+Turf+%26+Cricket+Nets+practice,+Volleyball,+AC+Hall+%26+Box+Cricket/@11.0347636,76.8948418,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba85f6543346159:0xe1fad2d0449a03fb!8m2!3d11.0347636!4d76.8974167!16s%2Fg%2F11j90mnsls?entry=ttu",
              ],
              address:
                "Marutham Sports Arena, Vadavalli, Coimbatore, Tamil Nadu 641005",
              time: "6.00 AM - 10:00 PM",
              groundType: "Turf",
            },
            {
              place: "Rajesh Badminton indoor court",
              sportsAvailable: ["Badminton"],
              image: [
                "https://lh3.googleusercontent.com/p/AF1QipPyNJfcvIqLyxsxWBnTgd89BWmMyZq78lmiadbz=s1360-w1360-h1020",
              ],
              location: [
                "https://www.google.com/maps/place/Rajesh+Badminton+indoor+court/@11.0300354,76.9038891,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba85f370922b0a5:0xe97c4e8ac2a7478a!8m2!3d11.0300354!4d76.90876!16s%2Fg%2F11dxk5bz9f?entry=ttu",
              ],
              address:
                "Rajesh Badminton indoor court, Vadavalli, Coimbatore, Tamil Nadu 641005",
              time: "6.00 AM - 10:00 PM",
              groundType: "Indoor",
            },
          ],
        },
        {
          areaName: "Kuppakonam Pudur",
          venues: [
            {
              place: "Playpal Badminton",
              sportsAvailable: ["Badminton"],
              image: [
                "https://lh3.googleusercontent.com/p/AF1QipPFXeGjC78eCloUJRSBuRJxU4vjv-XfJwIUbnDp=s1360-w1360-h1020",
              ],
              location: [
                "https://www.google.com/maps/place/Playpal+Badminton/@11.0282051,76.9325354,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba858c40eceb779:0x6e9263fac789f0b9!8m2!3d11.0282051!4d76.9351103!16s%2Fg%2F11gd20qmg1?entry=ttu",
              ],
              address:
                "Playpal Badminton, Kuppakonam Pudur, Coimbatore, Tamil Nadu 641005",
              time: "6.00 AM - 10:00 PM",
              groundType: "Indoor",
            },
          ],
        },
      ],
    },
  ];

  const sportsOptions = [
    { value: "cricket", label: "Cricket" },
    { value: "football", label: "Football" },
    { value: "badminton", label: "Badminton" },
    { value: "soapyFootball", label: "Soapy Football" },
    { value: "gym", label: "Gym" },
    { value: "volleyball", label: "Volleyball" },
    { value: "basketball", label: "Basketball" },
  ];

  const timeOptions = [
    { value: "morning", label: "Morning", timeRange: ["04:00", "11:59"] },
    { value: "afternoon", label: "Afternoon", timeRange: ["12:00", "15:59"] },
    { value: "evening", label: "Evening", timeRange: ["16:00", "17:59"] },
    { value: "night", label: "Night", timeRange: ["18:00", "21:59"] },
    { value: "darktime", label: "Darktime", timeRange: ["22:00", "03:59"] },
  ];

  const groundTypeOptions = {
    cricket: [
      { value: "box", label: "Box (cricket)" },
      { value: "net", label: "Net (cricket)" },
      { value: "ground", label: "Ground (cricket)" },
      { value: "mud_ground", label: "Mud Ground (cricket)" },
      { value: "turf", label: "Turf (cricket)" },
      { value: "grass_ground", label: "Grass Ground (cricket)" },
    ],
    football: [
      { value: "5s", label: "5s (football)" },
      { value: "7s", label: "7s (football)" },
      { value: "9s", label: "9s (football)" },
      { value: "11s", label: "11s (football)" },
      { value: "mud_ground", label: "Mud Ground (football)" },
      { value: "turf", label: "Turf (football)" },
      { value: "grass_ground", label: "Grass Ground (football)" },
    ],
    basketball: [
      { value: "full_court", label: "Full Court (BasketBall)" },
      { value: "half_court", label: "Half Court (BasketBall)" },
      { value: "only_ring", label: "Only Ring (BasketBall)" },
      { value: "wooden_surface", label: "Wooden Surface (BasketBall)" },
      { value: "cement_surface", label: "Cement Surface (BasketBall)" },
      { value: "thar", label: "Thar (BasketBall)" },
      { value: "mud", label: "Mud (BasketBall)" },
    ],
    badminton: [
      { value: "synthetic_surface", label: "Synthetic Surface (Badminton)" },
      { value: "wooden_surface", label: "Wooden Surface (Badminton)" },
      { value: "acrylic", label: "Acrylic (Badminton)" },
      { value: "cement_surface", label: "Cement Surface (Badminton)" },
      { value: "mud", label: "Mud (Badminton)" },
    ],
  };

  const sortOptions = [
    { value: "name", label: "Name" },
    { value: "time", label: "Time" },
  ];

  const { city } = useParams();
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedSports, setSelectedSports] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [selectedGroundTypes, setSelectedGroundTypes] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [places, setPlaces] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // const [showDetails, setShowDetails] = useState(false);

  // const toggleDetailsVisibility = () => {
  //   setShowDetails(!showDetails);
  // };

  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showPolicies, setShowPolicies] = useState(false);
  const [showAmenities, setShowAmenities] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);

  const toggleSelectedPlace = (index) => {
    if (selectedPlace === index) {
      setSelectedPlace(null); // Toggle off if already selected
    } else {
      setSelectedPlace(index); // Toggle on if not selected
    }
  };

  const togglePolicies = () => {
    setShowPolicies(!showPolicies);
    setShowAmenities(false); // Close amenities if open
    setShowPhotos(false); // Close photos if open
  };

  const toggleAmenities = () => {
    setShowAmenities(!showAmenities);
    setShowPolicies(false); // Close policies if open
    setShowPhotos(false); // Close photos if open
  };

  const togglePhotos = () => {
    setShowPhotos(!showPhotos);
    setShowPolicies(false); // Close policies if open
    setShowAmenities(false); // Close amenities if open
  };

  useEffect(() => {
    const selectedCity = cityData.find((c) => c.cityName === city);
    if (!selectedCity) {
      setPlaces([]);
      return;
    }

    let filteredPlaces = selectedCity.areas.flatMap((area) =>
      selectedAreas.length === 0 ||
      selectedAreas.some((a) => a.value === area.areaName)
        ? area.venues.map((venue) => ({
            area: area.areaName,
            ...venue,
          }))
        : []
    );

    if (selectedSports.length > 0) {
      filteredPlaces = filteredPlaces.filter((place) =>
        selectedSports.some((sport) =>
          place.sportsAvailable.includes(sport.label)
        )
      );
    }

    if (selectedTimes.length > 0) {
      filteredPlaces = filteredPlaces.filter((place) => {
        // Convert selectedTimes to an array of time ranges based on the filter conditions
        const timeRanges = selectedTimes.map((timeOption) => {
          switch (timeOption.value) {
            case "morning":
              return { start: 400, end: 1159 };
            case "afternoon":
              return { start: 1200, end: 1600 };
            case "evening":
              return { start: 1600, end: 1800 };
            case "night":
              return { start: 1800, end: 2200 };
            case "darktime":
              return { start: 2200, end: 2400 }; // Assuming 2400 represents midnight
            default:
              return null;
          }
        });

        // Check if the place's time falls within any of the selected time ranges
        return timeRanges.some((range) => {
          const placeTime = parseInt(place.time.replace(":", ""), 10); // Convert "HH:MM" to a number
          return placeTime >= range.start && placeTime <= range.end;
        });
      });
    }

    if (selectedGroundTypes.length > 0) {
      filteredPlaces = filteredPlaces.filter((place) =>
        selectedGroundTypes.some(
          (groundType) => place.groundType.toLowerCase() === groundType.value
        )
      );
    }

    if (sortBy) {
      filteredPlaces = [...filteredPlaces].sort((a, b) => {
        if (sortBy.value === "name") {
          return a.place.localeCompare(b.place);
        } else if (sortBy.value === "time") {
          return a.time.localeCompare(b.time);
        }
        return 0;
      });
    }

    setPlaces(filteredPlaces);
  }, [
    selectedAreas,
    selectedSports,
    selectedTimes,
    selectedGroundTypes,
    sortBy,
    city,
    cityData,
  ]);

  const handleAreaChange = (selectedOptions) => {
    setSelectedAreas(selectedOptions || []);
  };

  const handleSportsChange = (selectedOptions) => {
    setSelectedSports(selectedOptions);
    setSelectedGroundTypes([]);
  };

  const handleTimeChange = (selectedOption) => {
    setSelectedTimes((prevSelectedTimes) =>
      prevSelectedTimes.some(
        (timeOption) => timeOption.value === selectedOption.value
      )
        ? prevSelectedTimes.filter(
            (timeOption) => timeOption.value !== selectedOption.value
          )
        : [...prevSelectedTimes, selectedOption]
    );
  };

  const handleGroundTypeChange = (selectedOptions) => {
    setSelectedGroundTypes(selectedOptions || []);
  };

  const handleSortByChange = (selectedOption) => {
    setSortBy(selectedOption);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const NoOptionsMessage = (props) => {
    return (
      <components.NoOptionsMessage {...props}>
        Turfs Are Coming Soon In Your Area
      </components.NoOptionsMessage>
    );
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <FontAwesomeIcon icon={faSearch} />
      </components.DropdownIndicator>
    );
  };

  return (
    <div className="container-fluid mt-4 px-4">
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="form-group">
            <label>Sports</label>
            <Select
              options={sportsOptions}
              isMulti
              onChange={handleSportsChange}
              value={selectedSports}
              placeholder="Select sports"
              className="mb-3"
            />
          </div>
          <div className="form-group">
            <label>Time</label>
            <div className="row">
              {timeOptions.map((option) => (
                <div className="col-6" key={option.value}>
                  <button
                    type="button"
                    className={`btn btn-outline-secondary w-100  ${
                      selectedTimes.some((time) => time.value === option.value)
                        ? "active"
                        : ""
                    }`}
                    onClick={() => handleTimeChange(option)}
                  >
                    {option.label}{" "}
                    {option.timeRange
                      ? `(${option.timeRange.join(" - ")})`
                      : ""}
                  </button>
                </div>
              ))}
            </div>
          </div>
          {selectedSports.length > 0 && (
            <div className="form-group mt-3">
              <label>Ground Type</label>
              <Select
                options={selectedSports.flatMap(
                  (sport) => groundTypeOptions[sport.value] || []
                )}
                isMulti
                onChange={handleGroundTypeChange}
                value={selectedGroundTypes}
                placeholder="Select ground type"
                className="mb-3"
              />
            </div>
          )}
          <div className="form-group mt-3">
            <label>Area</label>
            <Select
              options={
                cityData
                  .find((c) => c.cityName === city)
                  ?.areas.map((area) => ({
                    value: area.areaName,
                    label: area.areaName,
                  })) || []
              }
              isMulti
              onChange={handleAreaChange}
              placeholder="Select area"
              className="mb-3"
              components={{ NoOptionsMessage, DropdownIndicator }}
            />
          </div>
          <div className="form-group">
            <label>Sort by</label>
            <Select
              options={sortOptions}
              onChange={handleSortByChange}
              placeholder="Sort by"
              className="mb-3"
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="mb-1">
              Date
            </label>{" "}
            <br />
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              minDate={new Date()}
              dateFormat="dd-MM-yyyy"
              className="form-control"
              customInput={<CustomDatePickerInput />} // Use the custom input component
            />
            <label className="ml-2" style={{ marginLeft: "10px" }}>
              <i class="fa-solid fa-calendar fa-2xl"></i>
            </label>
          </div>
        </div>
        <div className="col-md-8">
          <h3 className="places-heading">Turfs in {city}</h3>

          <ul>
            {places.length > 0 ? (
              places.map((place, index) => (
                <div className="col-md-12 mb-4" key={index}>
                  <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="row">
                      <div className="col-6 p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">
                          <h5>{place.place}</h5>
                        </strong>
                        <h6 className="mb-0">Sports Available :</h6>
                        <p className="card-text mb-auto">
                          {place.sportsAvailable.join(", ")}
                        </p>
                        <p className="card-text mb-auto mt-3">
                          <i className="fa-solid fa-location-dot"></i>

                          <a
                            href={place.location}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                            className="ms-2"
                          >
                            Location
                          </a>
                          <br />
                          {place.address}
                        </p>
                      </div>

                      <div className="col-3 p-4 d-flex flex-column position-static">
                        <h6 className="mb-0">Time:</h6>
                        <p className="card-text mb-auto">{place.time}</p>
                        <h6 className="mb-0">Ground Type:</h6>
                        <p className="card-text mb-auto">{place.groundType}</p>
                      </div>

                      <div className="col-3 p-4 d-flex flex-column position-static">
                        <img
                          src={place.image}
                          alt="Turf Image"
                          style={{ height: "180px", borderRadius: "10px" }}
                        />
                      </div>
                    </div>

                    <hr className="my-4" />

                    <div className="row">
                      <div className="col">
                        <button
                          className="btn btn-primary me-2"
                          onClick={() => toggleSelectedPlace(index)}
                        >
                          {selectedPlace === index
                            ? "Hide Details"
                            : "Show Details"}
                        </button>
                        {selectedPlace === index && (
                          <div className="mt-3">
                            <button
                              className="btn btn-info me-2"
                              onClick={togglePolicies}
                            >
                              Policies
                            </button>
                            <button
                              className="btn btn-info me-2"
                              onClick={toggleAmenities}
                            >
                              Amenities
                            </button>
                            <button
                              className="btn btn-info"
                              onClick={togglePhotos}
                            >
                              Photos
                            </button>
                            <div className="mt-3">
                              {/* Placeholder for policies, amenities, and photos content */}
                              {showPolicies && (
                                <div>
                                  <h6>Policies:</h6>
                                  <p>{place.policies}</p>
                                </div>
                              )}
                              {showAmenities && (
                                <div>
                                  <h5>Amenities:</h5>
                                  <div className="row">
                                    <div className="col-4">
                                      <h6>
                                        <i class="fa-solid fa-glass-water icon-space"></i>
                                        {place.amenities[0]}
                                      </h6>
                                      <h6>
                                        <i class="fa-solid fa-restroom icon-space"></i>
                                        {place.amenities[1]}
                                      </h6>
                                    </div>
                                    <div className="col-4">
                                      <h6>
                                        <i class="fa-solid fa-kit-medical icon-space"></i>
                                        {place.amenities[2]}
                                      </h6>
                                      <h6>
                                        <i class="fa-solid fa-square-parking icon-space"></i>
                                        {place.amenities[3]}
                                      </h6>
                                    </div>

                                    <div className="col-4">
                                      <h6>
                                        <i class="fa-solid fa-kit-medical icon-space"></i>
                                        {place.amenities[4]}
                                      </h6>
                                      <h6>
                                        <i class="fa-solid fa-shower icon-space"></i>
                                        {place.amenities[5]}
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {showPhotos && (
                                <div>
                                  <h6>Photos:</h6>
                                  <div className="row">
                                    {place.photos &&
                                      place.photos.map((photo, idx) => (
                                        <div className="col-4 mb-3" key={idx}>
                                          <img
                                            src={photo}
                                            alt={`Photo ${idx + 1}`}
                                            className="img-fluid"
                                          />
                                        </div>
                                      ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div
                className="d-flex justify-content-center align-items-center text-center"
                style={{
                  // height: "300px",
                  backgroundColor: "#f0f0f0",
                  border: "1px solid #ccc",
                  padding: "20px",
                }}
              >
                <strong
                  className="d-inline-block mb-2 text-primary"
                  style={{ fontSize: "24px", textShadow: "1px 1px 2px #333" }}
                >
                  <h3 style={{ color: "#3498db", margin: "0" }}>
                    No Venues Found
                  </h3>
                </strong>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TurfDetails;
