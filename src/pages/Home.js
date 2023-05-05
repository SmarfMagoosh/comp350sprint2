import React, { Component } from "react";
import "../pages/Home.css";
import Search from '../component/Search';
import SearchBar from '../component/SearchBar';
import Dropdown from '../component/Dropdown';

class Home extends Component {
  // Create a default state of this component
  constructor() {
    super();
    this.state = {
      courses: [{
               	"prof": "Jennifer Stone",
               	"title": "Principles of Accounting 1",
               	"code": "ACCT 201 A",
               	"term": "F20",
               	"credits": 3,
               	"time": {
               		"M": ["9 AM", "9:50 AM"],
               		"T": [],
               		"W": ["9 AM", "9:50 AM"],
               		"R": [],
               		"F": ["9 AM", "9:50 AM"]
               	}
               }, {
               	"prof": "Richard Snyder",
               	"title": "Principles of Accounting 1",
               	"code": "ACCT 201 B",
               	"term": "F20",
               	"credits": 3,
               	"time": {
               		"M": ["11 AM", "11:50 AM"],
               		"T": [],
               		"W": ["11 AM", "11:50 AM"],
               		"R": [],
               		"F": ["11 AM", "11:50 AM"]
               	}
               },
               {
               	"prof": "Richard Snyder",
               	"title": "Principles of Accounting 1",
               	"code": "ACCT 201 D",
               	"term": "F20",
               	"credits": 3,
               	"time": {
               		"M": ["1 PM", "1:50 PM"],
               		"T": [],
               		"W": ["1 PM", "1:50 PM"],
               		"R": [],
               		"F": ["1 PM", "1:50 PM"]
               	}
               }, {
               	"prof": "Richard Snyder",
               	"title": "Principles of Accounting 1",
               	"code": "ACCT 201 E",
               	"term": "F20",
               	"credits": 3,
               	"time": {
               		"M": ["2 PM", "2:50 PM"],
               		"T": [],
               		"W": ["2 PM", "2:50 PM"],
               		"R": [],
               		"F": ["2 PM", "2:50 PM"]
               	}
               }, {
               	"prof": "Jennifer Stone",
               	"title": "Principles of Accounting 2",
               	"code": "ACCT 202 A",
               	"term": "S21",
               	"credits": 3,
               	"time": {
               		"M": ["9 AM", "9:50 AM"],
               		"T": [],
               		"W": ["9 AM", "9:50 AM"],
               		"R": [],
               		"F": ["9 AM", "9:50 AM"]
               	}
               }, {
               	"prof": "Jennifer Stone",
               	"title": "Principles of Accounting 2",
               	"code": "ACCT 202 B",
               	"term": "S21",
               	"credits": 3,
               	"time": {
               		"M": ["11 AM", "11:50 AM"],
               		"T": [],
               		"W": ["11 AM", "11:50 AM"],
               		"R": [],
               		"F": ["11 AM", "11:50 AM"]
               	}
               }, {
               	"prof": "Richard Snyder",
               	"title": "Principles of Accounting 2",
               	"code": "ACCT 202 D",
               	"term": "S21",
               	"credits": 3,
               	"time": {
               		"M": ["1 PM", "1:50 PM"],
               		"T": [],
               		"W": ["1 PM", "1:50 PM"],
               		"R": [],
               		"F": ["1 PM", "1:50 PM"]
               	}
               }, {
               	"prof": "Richard Snyder",
               	"title": "Principles of Accounting 2",
               	"code": "ACCT 202 E",
               	"term": "S21",
               	"credits": 3,
               	"time": {
               		"M": ["3 PM", "3:50 PM"],
               		"T": [],
               		"W": ["3 PM", "3:50 PM"],
               		"R": [],
               		"F": ["3 PM", "3:50 PM"]
               	}
               }, {
               	"prof": "Michelle McFeaters",
               	"title": "Intermediate Accounting 1",
               	"code": "ACCT 301 A",
               	"term": "F20",
               	"credits": 3,
               	"time": {
               		"M": ["8 AM", "8:50 AM"],
               		"T": [],
               		"W": ["8 AM", "8:50 AM"],
               		"R": ["4 PM", "5:50 PM"],
               		"F": ["8 AM", "8:50 AM"]
               	}
               }, {
               	"prof": "Jennifer Stone",
               	"title": "Intermediate Accounting 1",
               	"code": "ACCT 301 B",
               	"term": "F20",
               	"credits": 3,
               	"time": {
               		"M": ["10 AM", "10:50 AM"],
               		"T": [],
               		"W": ["10 AM", "10:50 AM"],
               		"R": ["4 PM", "5:50 PM"],
               		"F": ["10 AM", "10:50 AM"]
               	}
               }, {
               	"prof": "Michelle McFeaters",
               	"title": "Intermediate Accounting 2",
               	"code": "ACCT 302 A",
               	"term": "S21",
               	"credits": 3,
               	"time": {
               		"M": ["8 AM", "8:50 AM"],
               		"T": [],
               		"W": ["8 AM", "8:50 AM"],
               		"R": ["4 PM", "5:50 PM"],
               		"F": ["8 AM", "8:50 AM"]
               	}
               }, {
               	"prof": "Michelle McFeaters",
               	"title": "Intermediate Accounting 2",
               	"code": "ACCT 302 B",
               	"term": "S21",
               	"credits": 3,
               	"time": {
               		"M": ["10 AM", "10:50 AM"],
               		"T": [],
               		"W": ["10 AM", "10:50 AM"],
               		"R": ["4 PM", "5:50 PM"],
               		"F": ["10 AM", "10:50 AM"]
               	}
               }, {
               	"prof": "Michelle McFeaters",
               	"title": "Cost Accounting",
               	"code": "ACCT 303 A",
               	"term": "F20",
               	"credits": 3,
               	"time": {
               		"M": [],
               		"T": ["8 AM", "9:15 AM"],
               		"W": [],
               		"R": ["8 AM", "9:15 AM"],
               		"F": []
               	}
               }, {
               	"prof": "Jennifer Stone",
               	"title": "Acct Information Systems",
               	"code": "ACCT 321 A",
               	"term": "S21",
               	"credits": 3,
               	"time": {
               		"M": [],
               		"T": ["10:05 AM", "11:20 AM"],
               		"W": [],
               		"R": ["10:05 AM", "11:20 AM"],
               		"F": []
               	}
               }, {
               	"prof": "Jennifer Stone",
               	"title": "Advanced Accounting 1",
               	"code": "ACCT 401 A",
               	"term": "F20",
               	"credits": 3,
               	"time": {
               		"M": [],
               		"T": ["10:05 AM", "11:20 AM"],
               		"W": [],
               		"R": ["10:05 AM", "11:20 AM"],
               		"F": []
               	}
               }, {
               	"prof": "Richard Snyder",
               	"title": "Advanced Accounting 2",
               	"code": "ACCT 402 A",
               	"term": "S21",
               	"credits": 3,
               	"time": {
               		"M": ["12 PM", "12:50 PM"],
               		"T": [],
               		"W": ["12 PM", "12:50 PM"],
               		"R": [],
               		"F": ["12 PM", "12:50 PM"]
               	}
               }, {
               	"prof": "Andrea DiDonato",
               	"title": "Auditing",
               	"code": "ACCT 403 B",
               	"term": "F20",
               	"credits": 3,
               	"time": {
               		"M": [],
               		"T": ["11:30 AM", "12:45 PM"],
               		"W": [],
               		"R": ["11:30 AM", "12:45 PM"],
               		"F": []
               	}
               }, {
               	"prof": "Andrea DiDonato",
               	"title": "Advanced Auditing",
               	"code": "ACCT 404 A",
               	"term": "S21",
               	"credits": 3,
               	"time": {
               		"M": ["6:30 PM", "9 PM"],
               		"T": [],
               		"W": [],
               		"R": [],
               		"F": []
               	}
               }, {
               	"prof": "Richard Snyder",
               	"title": "Tax Accounting",
               	"code": "ACCT 405 A",
               	"term": "F20",
               	"credits": 3,
               	"time": {
               		"M": [],
               		"T": ["10:05 AM", "11:20 AM"],
               		"W": [],
               		"R": ["10:05 AM", "11:20 AM"],
               		"F": []
               	}
               }, {
               	"prof": "Richard Snyder",
               	"title": "Tax Accounting",
               	"code": "ACCT 405 B",
               	"term": "F20",
               	"credits": 3,
               	"time": {
               		"M": [],
               		"T": ["1 PM", "2:15 PM"],
               		"W": [],
               		"R": ["1 PM", "2:15 PM"],
               		"F": []
               	}
               }, {
               	"prof": "Richard Snyder",
               	"title": "Advanced Tax Acct",
               	"code": "ACCT 406 A",
               	"term": "S21",
               	"credits": 3,
               	"time": {
               		"M": [],
               		"T": ["1 PM", "2:15 PM"],
               		"W": [],
               		"R": ["1 PM", "2:15 PM"],
               		"F": []
               	}
               }, {
               	"prof": "Michelle McFeaters",
               	"title": "Contemp Acct Theory/Practice",
               	"code": "ACCT 410 A",
               	"term": "S21",
               	"credits": 3,
               	"time": {
               		"M": [],
               		"T": ["8 AM", "9:15 AM"],
               		"W": [],
               		"R": ["8 AM", "9:15 AM"],
               		"F": []
               	}
               }, {
               	"prof": "Glen Sanders",
               	"title": "Elements and Principles of Drawing",
               	"code": "ART 101 A",
               	"term": "F20",
               	"credits": 3,
               	"time": {
               		"M": ["10 AM", "11:15 AM"],
               		"T": [],
               		"W": ["10 AM", "11:15 AM"],
               		"R": [],
               		"F": []
               	}
               }, {
               	"prof": "Kathy Rhoades",
               	"title": "Ceramics 1 Handbuilding",
               	"code": "ART 103 A",
               	"term": "F20",
               	"credits": 3,
               	"time": {
               		"M": [],
               		"T": ["1 PM", "2:15 PM"],
               		"W": [],
               		"R": ["1 PM", "2:15 PM"],
               		"F": []
               	}
               }, {
               	"prof": "Kathy Rhoades",
               	"title": "Ceramics 1 Handbuilding",
               	"code": "ART 103 A",
               	"term": "S21",
               	"credits": 3,
               	"time": {
               		"M": [],
               		"T": ["1 PM", "2:15 PM"],
               		"W": [],
               		"R": ["1 PM", "2:15 PM"],
               		"F": []
               	}
               }, {
               	"prof": "Kathy Rhoades",
               	"title": "Ceramics 1 Wheel",
               	"code": "ART 104 A",
               	"term": "F20",
               	"credits": 3,
               	"time": {
               		"M": [],
               		"T": ["10:05 AM", "11:20 AM"],
               		"W": [],
               		"R": ["10:05 AM", "11:20 AM"],
               		"F": []
               	}
               }, {
               	"prof": "Kathy Rhoades",
               	"title": "Ceramics 1 Wheel",
               	"code": "ART 104 A",
               	"term": "S21",
               	"credits": 3,
               	"time": {
               		"M": [],
               		"T": ["10:05 AM", "11:20 AM"],
               		"W": [],
               		"R": ["10:05 AM", "11:20 AM"],
               		"F": []
               	}
               }, {
               	"prof": "Kathy Rhoades",
               	"title": "Ceramics 1 Wheel",
               	"code": "ART 104 B",
               	"term": "F20",
               	"credits": 3,
               	"time": {
               		"M": [],
               		"T": ["2:30 PM", "3:45 PM"],
               		"W": [],
               		"R": ["2:30 PM", "3:45 PM"],
               		"F": []
               	}
               }, {
               	"prof": "Kathy Rhoades",
               	"title": "Ceramics 1 Wheel",
               	"code": "ART 104 B",
               	"term": "S21",
               	"credits": 3,
               	"time": {
               		"M": [],
               		"T": ["2:30 PM", "3:45 PM"],
               		"W": [],
               		"R": ["2:30 PM", "3:45 PM"],
               		"F": []
               	}
               }, {
               	"prof": "Glen Sanders",
               	"title": "Intro to Color Theory in Painting",
               	"code": "ART 105 A",
               	"term": "S21",
               	"credits": 3,
               	"time": {
               		"M": ["10 AM", "11:15 AM"],
               		"T": [],
               		"W": ["10 AM", "11:15 AM"],
               		"R": [],
               		"F": []
               	}
               }, {
               	"prof": "Glen Sanders",
               	"title": "Introduction to Sculpture",
               	"code": "ART 111 A",
               	"term": "F20",
               	"credits": 3,
               	"time": {
               		"M": ["11:30 AM", "12:45 PM"],
               		"T": [],
               		"W": ["11:30 AM", "12:45 PM"],
               		"R": [],
               		"F": []
               	}
               },, {
                 	"prof": "Chandler Brutscher",
                 	"title": "Beginning Printmaking",
                 	"code": "ART 121 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Beverly Carter",
                 	"title": "Hist & Apprec of Art 1",
                 	"code": "ART 201 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Beverly Carter",
                 	"title": "Hist & Apprec of Art 2",
                 	"code": "ART 202 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kathy Rhoades",
                 	"title": "Ceramics 2",
                 	"code": "ART 207 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["3 PM", "5:30 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kathy Rhoades",
                 	"title": "Pueblo Pottery",
                 	"code": "ART 208 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["3 PM", "5:30 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Chandler Brutscher",
                 	"title": "Gallery Studies",
                 	"code": "ART 320 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Natalie Heisey",
                 	"title": "The Use of Art in the Classroom",
                 	"code": "ART 321 A",
                 	"term": "F20",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": ["4 PM", "4:50 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Natalie Heisey",
                 	"title": "The Use of Art in the Classroom",
                 	"code": "ART 321 A",
                 	"term": "S21",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": ["4 PM", "4:50 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "James Clem",
                 	"title": "Intro to Sky Motions & Planets",
                 	"code": "ASTR 206 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "James Clem",
                 	"title": "Intro to Stars/Galaxies/Cosmology",
                 	"code": "ASTR 207 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "James Clem",
                 	"title": "Intro to Stars/Galaxies/Cosmology",
                 	"code": "ASTR 207 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "James Clem",
                 	"title": "Introduction to Astrophysics",
                 	"code": "ASTR 310 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["7 PM", "8:15 PM"],
                 		"T": [],
                 		"W": ["7 PM", "8:15 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kristina Pazehoski",
                 	"title": "General Biology 1",
                 	"code": "BIOL 101 A",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Kristina Pazehoski",
                 	"title": "General Biology 1",
                 	"code": "BIOL 101 B",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Lisa Antoszewski",
                 	"title": "Laboratory",
                 	"code": "BIOL 101 L",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": ["2 PM", "4:59 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Laurie Lytle",
                 	"title": "Laboratory",
                 	"code": "BIOL 101 M",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "12:59 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Joy Strain",
                 	"title": "Laboratory",
                 	"code": "BIOL 101 N",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "5:29 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Joy Strain",
                 	"title": "Laboratory",
                 	"code": "BIOL 101 O",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["2 PM", "4:59 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Laurie Lytle",
                 	"title": "Laboratory",
                 	"code": "BIOL 101 P",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": ["10:05 AM", "12:59 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Joy Strain",
                 	"title": "Laboratory",
                 	"code": "BIOL 101 Q",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": ["2:30 PM", "5:29 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jan Dudt",
                 	"title": "General Biology 2",
                 	"code": "BIOL 102 A",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["8 AM", "8:50 AM"],
                 		"T": [],
                 		"W": ["8 AM", "8:50 AM"],
                 		"R": [],
                 		"F": ["8 AM", "8:50 AM"]
                 	}
                 }, {
                 	"prof": "Jan Dudt",
                 	"title": "General Biology 2",
                 	"code": "BIOL 102 B",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Stephen Jenkins",
                 	"title": "Laboratory",
                 	"code": "BIOL 102 L",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": ["2 PM", "4:59 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Joy Strain",
                 	"title": "Laboratory",
                 	"code": "BIOL 102 M",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "12:59 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jan Dudt",
                 	"title": "Laboratory",
                 	"code": "BIOL 102 N",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "5:29 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Joy Strain",
                 	"title": "Laboratory",
                 	"code": "BIOL 102 O",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": ["2:30 PM", "5:29 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Tracy Farone",
                 	"title": "Study: Intro to Biology Health",
                 	"code": "BIOL 190 A",
                 	"term": "S21",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["1 PM", "2:59 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jacqueline McCullough",
                 	"title": "Intro to Environmental Education",
                 	"code": "BIOL 208 A",
                 	"term": "F20",
                 	"credits": 2,
                 	"time": {
                 		"M": [],
                 		"T": ["5 PM", "5:50 PM"],
                 		"W": [],
                 		"R": ["5 PM", "5:50 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Lisa Antoszewski",
                 	"title": "Genetics",
                 	"code": "BIOL 233 A",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Lisa Antoszewski",
                 	"title": "Genetics",
                 	"code": "BIOL 233 B",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Lisa Antoszewski",
                 	"title": "Recitation",
                 	"code": "BIOL 233 L",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Brian Yowler",
                 	"title": "Recitation",
                 	"code": "BIOL 233 M",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Lisa Antoszewski",
                 	"title": "Recitation",
                 	"code": "BIOL 233 N",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Brian Yowler",
                 	"title": "Recitation",
                 	"code": "BIOL 233 O",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kristina Pazehoski",
                 	"title": "Cell Biology",
                 	"code": "BIOL 234 A",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Lisa Antoszewski",
                 	"title": "Laboratory",
                 	"code": "BIOL 234 M",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": ["10:05 AM", "12:59 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Brian Yowler",
                 	"title": "Laboratory",
                 	"code": "BIOL 234 N",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "5:30 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Brian Yowler",
                 	"title": "Laboratory",
                 	"code": "BIOL 234 O",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": ["2:30 PM", "5:30 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Devin Stauff",
                 	"title": "Advanced Genetics",
                 	"code": "BIOL 301 A",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Devin Stauff",
                 	"title": "Laboratory",
                 	"code": "BIOL 301 L",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jan Dudt",
                 	"title": "Plant Taxonomy",
                 	"code": "BIOL 305 A",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Jan Dudt",
                 	"title": "Laboratory",
                 	"code": "BIOL 305 L",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["2 PM", "4:59 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Tracy Farone",
                 	"title": "Zoonotic Disease and Public Health",
                 	"code": "BIOL 310 A",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Tracy Farone",
                 	"title": "Laboratory",
                 	"code": "BIOL 310 L",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": ["1 PM", "2:59 PM"]
                 	}
                 }, {
                 	"prof": "Tracy Farone",
                 	"title": "Histology",
                 	"code": "BIOL 313 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Darren Wood",
                 	"title": "Conservation/Wildlife Biology",
                 	"code": "BIOL 320 A",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["8 AM", "8:50 AM"],
                 		"T": [],
                 		"W": ["8 AM", "8:50 AM"],
                 		"R": [],
                 		"F": ["8 AM", "8:50 AM"]
                 	}
                 }, {
                 	"prof": "Darren Wood",
                 	"title": "Laboratory",
                 	"code": "BIOL 320 L",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": ["2 PM", "4:59 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Lisa Antoszewski",
                 	"title": "The Biology of Cancer",
                 	"code": "BIOL 322 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Jan Dudt",
                 	"title": "Evolutionary Biology",
                 	"code": "BIOL 326 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Darren Wood",
                 	"title": "Ecology",
                 	"code": "BIOL 331 A",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Darren Wood",
                 	"title": "Laboratory",
                 	"code": "BIOL 331 L",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": ["2 PM", "4:59 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kristina Pazehoski",
                 	"title": "Biochemistry For Biology",
                 	"code": "BIOL 334 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Tracy Farone",
                 	"title": "Human/Mammalian Anatomy",
                 	"code": "BIOL 341 A",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Tracy Farone",
                 	"title": "Laboratory",
                 	"code": "BIOL 341 L",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": ["1 PM", "2:59 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Tracy Farone",
                 	"title": "Laboratory",
                 	"code": "BIOL 341 M",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": ["3 PM", "4:59 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Tracy Farone",
                 	"title": "Laboratory",
                 	"code": "BIOL 341 N",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["1 PM", "2:59 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Tracy Farone",
                 	"title": "Human/Mammalian Physiology",
                 	"code": "BIOL 346 A",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Lisa Antoszewski",
                 	"title": "Laboratory",
                 	"code": "BIOL 346 L",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["3 PM", "4:59 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Tracy Farone",
                 	"title": "Laboratory",
                 	"code": "BIOL 346 M",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": ["3 PM", "4:59 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Stephen Jenkins",
                 	"title": "Contemporary Topics",
                 	"code": "BIOL 372 A",
                 	"term": "S21",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "1:50 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Brian Yowler",
                 	"title": "Study: Medical Genetics",
                 	"code": "BIOL 390 A",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Brian Yowler",
                 	"title": "Laboratory",
                 	"code": "BIOL 390 L",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": ["2:30 PM", "5:30 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Darren Wood",
                 	"title": "Basis of Wildlife Behavior",
                 	"code": "BIOL 403 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["8 AM", "8:50 AM"],
                 		"T": [],
                 		"W": ["8 AM", "8:50 AM"],
                 		"R": [],
                 		"F": ["8 AM", "8:50 AM"]
                 	}
                 }, {
                 	"prof": "Devin Stauff",
                 	"title": "Microbiology",
                 	"code": "BIOL 407 A",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Devin Stauff",
                 	"title": "Laboratory",
                 	"code": "BIOL 407 L",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:30 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:30 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Devin Stauff",
                 	"title": "Laboratory",
                 	"code": "BIOL 407 M",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": ["3 PM", "4:30 PM"],
                 		"W": [],
                 		"R": ["3 PM", "4:30 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Stephen Jenkins",
                 	"title": "Entomology",
                 	"code": "BIOL 409 A",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Stephen Jenkins",
                 	"title": "Laboratory",
                 	"code": "BIOL 409 L",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": ["2:30 PM", "5:30 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Stephen Jenkins",
                 	"title": "Seminar in Biology",
                 	"code": "BIOL 488 A",
                 	"term": "F20",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Brian Yowler",
                 	"title": "Seminar in Biology",
                 	"code": "BIOL 488 A",
                 	"term": "S21",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Brian Yowler",
                 	"title": "Seminar in Biology",
                 	"code": "BIOL 488 B",
                 	"term": "F20",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Lisa Antoszewski",
                 	"title": "Seminar in Biology",
                 	"code": "BIOL 488 B",
                 	"term": "S21",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": ["2 PM", "2:50 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Michael Falcetta",
                 	"title": "Chemistry For Engineers",
                 	"code": "CHEM 105 A",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["8 AM", "8:50 AM"],
                 		"T": [],
                 		"W": ["8 AM", "8:50 AM"],
                 		"R": [],
                 		"F": ["8 AM", "8:50 AM"]
                 	}
                 }, {
                 	"prof": "Michael Falcetta",
                 	"title": "Chemistry For Engineers",
                 	"code": "CHEM 105 B",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Michael Falcetta",
                 	"title": "Laboratory",
                 	"code": "CHEM 105 L",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": ["1 PM", "2:59 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Michael Falcetta",
                 	"title": "Laboratory",
                 	"code": "CHEM 105 M",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": ["3 PM", "4:59 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Michael Falcetta",
                 	"title": "Laboratory",
                 	"code": "CHEM 105 N",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": ["1:30 PM", "3:29 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Michael Falcetta",
                 	"title": "Laboratory",
                 	"code": "CHEM 105 O",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": ["3:30 PM", "5:30 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Holly Guevara",
                 	"title": "General Chemistry 1",
                 	"code": "CHEM 111 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Holly Guevara",
                 	"title": "General Chemistry 1",
                 	"code": "CHEM 111 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Timothy Homan",
                 	"title": "General Chemistry 2",
                 	"code": "CHEM 112 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Charles Kriley",
                 	"title": "General Chemistry 2",
                 	"code": "CHEM 112 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Holly Guevara",
                 	"title": "General Chemistry 1 Lab",
                 	"code": "CHEM 113 L",
                 	"term": "F20",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["2 PM", "4:59 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Charles Kriley",
                 	"title": "General Chemistry 1 Lab",
                 	"code": "CHEM 113 M",
                 	"term": "F20",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": ["10:05 AM", "12:59 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Holly Guevara",
                 	"title": "General Chemistry 1 Lab",
                 	"code": "CHEM 113 N",
                 	"term": "F20",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": ["2:30 PM", "5:29 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Holly Guevara",
                 	"title": "General Chemistry 1 Lab",
                 	"code": "CHEM 113 O",
                 	"term": "F20",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": ["2 PM", "4:59 PM"]
                 	}
                 }, {
                 	"prof": "Charles Kriley",
                 	"title": "General Chemistry 2 Lab",
                 	"code": "CHEM 114 L",
                 	"term": "S21",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["2 PM", "4:59 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Holly Guevara",
                 	"title": "General Chemistry 2 Lab",
                 	"code": "CHEM 114 M",
                 	"term": "S21",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": ["10:05 AM", "12:59 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Charles Kriley",
                 	"title": "General Chemistry 2 Lab",
                 	"code": "CHEM 114 N",
                 	"term": "S21",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": ["2:30 PM", "5:29 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Ven Ney Wong",
                 	"title": "Analytical Chemistry",
                 	"code": "CHEM 227 A",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Ven Ney Wong",
                 	"title": "Laboratory",
                 	"code": "CHEM 227 L",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "5:29 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Ven Ney Wong",
                 	"title": "Laboratory",
                 	"code": "CHEM 227 M",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["2 PM", "4:59 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Charles Kriley",
                 	"title": "Desc Inorg/Bioinorg Chemistry",
                 	"code": "CHEM 231 A",
                 	"term": "S21",
                 	"credits": 2,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "10:55 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "10:55 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Timothy Homan",
                 	"title": "Chemistry in Context",
                 	"code": "CHEM 235 A",
                 	"term": "F20",
                 	"credits": 1,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Susan Cramer",
                 	"title": "Organic Chemistry 1",
                 	"code": "CHEM 241 A",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["8 AM", "8:50 AM"],
                 		"T": [],
                 		"W": ["8 AM", "8:50 AM"],
                 		"R": [],
                 		"F": ["8 AM", "8:50 AM"]
                 	}
                 }, {
                 	"prof": "Timothy Homan",
                 	"title": "Organic Chemistry 1",
                 	"code": "CHEM 241 B",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Timothy Homan",
                 	"title": "Laboratory",
                 	"code": "CHEM 241 L",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "5:30 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Timothy Homan",
                 	"title": "Laboratory",
                 	"code": "CHEM 241 M",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["2 PM", "4:59 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Susan Cramer",
                 	"title": "Laboratory",
                 	"code": "CHEM 241 N",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": ["10:05 AM", "12:59 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Timothy Homan",
                 	"title": "Laboratory",
                 	"code": "CHEM 241 O",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": ["2:30 PM", "5:30 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Susan Cramer",
                 	"title": "Organic Chemistry 2",
                 	"code": "CHEM 242 A",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["8 AM", "8:50 AM"],
                 		"T": [],
                 		"W": ["8 AM", "8:50 AM"],
                 		"R": [],
                 		"F": ["8 AM", "8:50 AM"]
                 	}
                 }, {
                 	"prof": "Susan Cramer",
                 	"title": "Organic Chemistry 2",
                 	"code": "CHEM 242 B",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Susan Cramer",
                 	"title": "Laboratory",
                 	"code": "CHEM 242 L",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": ["2 PM", "4:59 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Susan Cramer",
                 	"title": "Laboratory",
                 	"code": "CHEM 242 M",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "5:30 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Timothy Homan",
                 	"title": "Laboratory",
                 	"code": "CHEM 242 N",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["2 PM", "4:59 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Timothy Homan",
                 	"title": "Laboratory",
                 	"code": "CHEM 242 O",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": ["2:30 PM", "5:30 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Michael Falcetta",
                 	"title": "Introduction to Molecular Modeling",
                 	"code": "CHEM 245 A",
                 	"term": "S21",
                 	"credits": 2,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": ["2:30 PM", "4:30 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Michael Falcetta",
                 	"title": "Physical Chem of Biological Systems",
                 	"code": "CHEM 342 A",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Michael Falcetta",
                 	"title": "Laboratory",
                 	"code": "CHEM 342 L",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["2 PM", "5 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Joseph Augspurger",
                 	"title": "Microscopic Physical Chemistry:",
                 	"code": "CHEM 345 A",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Joseph Augspurger",
                 	"title": "Laboratory",
                 	"code": "CHEM 345 L",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": ["2 PM", "4:59 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Joseph Augspurger",
                 	"title": "Macroscopic Physical Chemistry:",
                 	"code": "CHEM 346 A",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Joseph Augspurger",
                 	"title": "Laboratory",
                 	"code": "CHEM 346 L",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": ["2 PM", "4:59 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kevin Shaw",
                 	"title": "Biochemistry 1",
                 	"code": "CHEM 351 A",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["8 AM", "8:50 AM"],
                 		"T": [],
                 		"W": ["8 AM", "8:50 AM"],
                 		"R": [],
                 		"F": ["8 AM", "8:50 AM"]
                 	}
                 }, {
                 	"prof": "Kevin Shaw",
                 	"title": "Laboratory",
                 	"code": "CHEM 351 L",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["2 PM", "4:59 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kevin Shaw",
                 	"title": "Laboratory",
                 	"code": "CHEM 351 M",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": ["2:30 PM", "5:29 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kevin Shaw",
                 	"title": "Biochemistry 2",
                 	"code": "CHEM 352 A",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Kevin Shaw",
                 	"title": "Laboratory",
                 	"code": "CHEM 352 L",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": ["1 PM", "4:59 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Daniel Bridger",
                 	"title": "Study: Intro to Clinical Medicine",
                 	"code": "CHEM 390 A",
                 	"term": "F20",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": ["6:30 PM", "8:10 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Ven Ney Wong",
                 	"title": "Instrumental Analysis",
                 	"code": "CHEM 406 A",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Ven Ney Wong",
                 	"title": "Laboratory",
                 	"code": "CHEM 406 L",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "5:30 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "5:30 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Charles Kriley",
                 	"title": "Inorganic Synthesis Laboratory",
                 	"code": "CHEM 422 A",
                 	"term": "F20",
                 	"credits": 2,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "5:30 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "5:30 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Charles Kriley",
                 	"title": "Adv Inorg/Organometallic  Chemistry",
                 	"code": "CHEM 431 A",
                 	"term": "F20",
                 	"credits": 2,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Charles Kriley",
                 	"title": "Crystal Structure Analysis",
                 	"code": "CHEM 441 A",
                 	"term": "F20",
                 	"credits": 2,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["1 PM", "2:59 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kevin Shaw",
                 	"title": "Biochemistry: Data and Analysis",
                 	"code": "CHEM 451 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Holly Guevara",
                 	"title": "Advanced Molecular Spectroscopy",
                 	"code": "CHEM 453 A",
                 	"term": "S21",
                 	"credits": 2,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Holly Guevara",
                 	"title": "Advanced Synthesis Laboratory",
                 	"code": "CHEM 458 A",
                 	"term": "S21",
                 	"credits": 2,
                 	"time": {
                 		"M": ["1 PM", "3:59 PM"],
                 		"T": [],
                 		"W": ["1 PM", "3:59 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Susan Cramer",
                 	"title": "Polymer Chemistry",
                 	"code": "CHEM 463 A",
                 	"term": "F20",
                 	"credits": 2,
                 	"time": {
                 		"M": [],
                 		"T": ["8:15 AM", "9:05 AM"],
                 		"W": [],
                 		"R": ["8:15 AM", "9:05 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Timothy Homan",
                 	"title": "Adv Organic Chem",
                 	"code": "CHEM 466 A",
                 	"term": "S21",
                 	"credits": 2,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "10:55 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "10:55 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kevin Shaw",
                 	"title": "Biochemistry Seminar",
                 	"code": "CHEM 487 A",
                 	"term": "S21",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Kevin Shaw",
                 	"title": "Biochemistry Seminar",
                 	"code": "CHEM 487 B",
                 	"term": "S21",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Michael Falcetta",
                 	"title": "Chemistry Seminar",
                 	"code": "CHEM 488 A",
                 	"term": "F20",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "David Robbins",
                 	"title": "Intro to Christian Ministries",
                 	"code": "CMIN 122 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12:30 PM", "1:45 PM"],
                 		"T": [],
                 		"W": ["12:30 PM", "1:45 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "David Robbins",
                 	"title": "Christ and Culture",
                 	"code": "CMIN 228 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["8:35 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["8:35 AM", "9:50 AM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Donald Shepson",
                 	"title": "Spiritual Formation",
                 	"code": "CMIN 238 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Donald Shepson",
                 	"title": "Spiritual Formation",
                 	"code": "CMIN 238 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Donald Shepson",
                 	"title": "Discipleship and Evangelism",
                 	"code": "CMIN 248 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["4 PM", "5:15 PM"],
                 		"W": [],
                 		"R": ["4 PM", "5:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "David Robbins",
                 	"title": "Communicating the Gospel",
                 	"code": "CMIN 258 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["8:35 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["8:35 AM", "9:50 AM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "David Robbins",
                 	"title": "Leadership/Ministry Administration",
                 	"code": "CMIN 321 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "12:15 PM"],
                 		"T": [],
                 		"W": ["11 AM", "12:15 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Donald Shepson",
                 	"title": "Worship and Prayer Ministry",
                 	"code": "CMIN 361 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Donald Shepson",
                 	"title": "Biblical Counseling",
                 	"code": "CMIN 412 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Patricia Pritchard",
                 	"title": "Public Speaking & Rhetoric",
                 	"code": "COMM 104 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["3 PM", "3:50 PM"],
                 		"T": [],
                 		"W": ["3 PM", "3:50 PM"],
                 		"R": [],
                 		"F": ["3 PM", "3:50 PM"]
                 	}
                 }, {
                 	"prof": "Betsy Craig",
                 	"title": "Public Speaking & Rhetoric",
                 	"code": "COMM 104 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jason Edwards",
                 	"title": "Public Speaking & Rhetoric",
                 	"code": "COMM 104 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jason Edwards",
                 	"title": "Public Speaking & Rhetoric",
                 	"code": "COMM 104 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jason Edwards",
                 	"title": "Forensics",
                 	"code": "COMM 109 A",
                 	"term": "F20",
                 	"credits": 1,
                 	"time": {
                 		"M": ["3 PM", "3:50 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Ryan Hammond",
                 	"title": "Principles of Media",
                 	"code": "COMM 110 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["6:30 PM", "9 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Gregory Bandy",
                 	"title": "Principles of Media",
                 	"code": "COMM 110 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kimberly Miller",
                 	"title": "Writing For the Media",
                 	"code": "COMM 135 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["8 AM", "8:50 AM"],
                 		"T": [],
                 		"W": ["8 AM", "8:50 AM"],
                 		"R": [],
                 		"F": ["8 AM", "8:50 AM"]
                 	}
                 }, {
                 	"prof": "Kimberly Miller",
                 	"title": "Writing For the Media",
                 	"code": "COMM 135 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Alexander Catanese",
                 	"title": "Research Methods in Comm",
                 	"code": "COMM 212 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["6:30 PM", "9 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kimberly Miller",
                 	"title": "Film History & Theory",
                 	"code": "COMM 222 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Patricia Pritchard",
                 	"title": "Intercultural Communication",
                 	"code": "COMM 225 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Patricia Pritchard",
                 	"title": "Intercultural Communication",
                 	"code": "COMM 225 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Gregory Bandy",
                 	"title": "Journalism",
                 	"code": "COMM 235 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Gregory Bandy",
                 	"title": "Media Criticism",
                 	"code": "COMM 240 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Gregory Bandy",
                 	"title": "Digital Photography",
                 	"code": "COMM 245 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Ryan Hammond",
                 	"title": "Digital Citizenship",
                 	"code": "COMM 250 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["6:30 PM", "9 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kimberly Miller",
                 	"title": "Developing Characters",
                 	"code": "COMM 272 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Patricia Pritchard",
                 	"title": "Interpersonal Communication",
                 	"code": "COMM 304 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Kimberly Miller",
                 	"title": "Christian Faith & Cinema",
                 	"code": "COMM 352 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kimberly Miller",
                 	"title": "Screenwriting",
                 	"code": "COMM 359 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Gregory Bandy",
                 	"title": "Video Production",
                 	"code": "COMM 378 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Gregory Bandy",
                 	"title": "Video Production",
                 	"code": "COMM 378 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Gregory Bandy",
                 	"title": "Documentary Film",
                 	"code": "COMM 388 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Gregory Bandy",
                 	"title": "Special Events and Promotions",
                 	"code": "COMM 405 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Kimberly Miller",
                 	"title": "Seminar in Communication",
                 	"code": "COMM 488 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Brian Dellinger",
                 	"title": "Comp Programming 1",
                 	"code": "COMP 141 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "David Valentine",
                 	"title": "Comp Programming 1",
                 	"code": "COMP 141 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Brian Dellinger",
                 	"title": "Comp Programming 1",
                 	"code": "COMP 141 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "David Valentine",
                 	"title": "Comp Programming 1",
                 	"code": "COMP 141 C",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["3 PM", "3:50 PM"],
                 		"T": [],
                 		"W": ["3 PM", "3:50 PM"],
                 		"R": [],
                 		"F": ["3 PM", "3:50 PM"]
                 	}
                 }, {
                 	"prof": "David Valentine",
                 	"title": "Intro to Computer Science",
                 	"code": "COMP 155 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "David Valentine",
                 	"title": "Intro to Computer Science",
                 	"code": "COMP 155 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Brian Dellinger",
                 	"title": "Ethics Faith and Conscious Mind",
                 	"code": "COMP 205 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Brian Dellinger",
                 	"title": "Ethics Faith and Conscious Mind",
                 	"code": "COMP 205 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jonathan Hutchins",
                 	"title": "Comp Programming 2",
                 	"code": "COMP 220 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Jonathan Hutchins",
                 	"title": "Comp Programming 2",
                 	"code": "COMP 220 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Jonathan Hutchins",
                 	"title": "Comp Programming 2",
                 	"code": "COMP 220 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Jonathan Hutchins",
                 	"title": "Intro to Data Struct & Algorithms",
                 	"code": "COMP 222 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Jonathan Hutchins",
                 	"title": "Intro to Data Struct & Algorithms",
                 	"code": "COMP 222 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "David Valentine",
                 	"title": "Parallel Computing",
                 	"code": "COMP 233 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Lory Al Moakar",
                 	"title": "Database Mgt Systems",
                 	"code": "COMP 244 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Lory Al Moakar",
                 	"title": "Database Mgt Systems",
                 	"code": "COMP 244 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Lory Al Moakar",
                 	"title": "Database Mgt Systems",
                 	"code": "COMP 244 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Brian Dellinger",
                 	"title": "Automata Theory",
                 	"code": "COMP 314 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "David Valentine",
                 	"title": "Computer Architecture/Org",
                 	"code": "COMP 325 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "David Valentine",
                 	"title": "Computer Architecture/Org",
                 	"code": "COMP 325 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Lory Al Moakar",
                 	"title": "Operating Systems",
                 	"code": "COMP 340 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Brian Dickinson",
                 	"title": "Operating Systems",
                 	"code": "COMP 340 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Lory Al Moakar",
                 	"title": "Data Comm & Networking",
                 	"code": "COMP 342 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Lory Al Moakar",
                 	"title": "Data Comm & Networking",
                 	"code": "COMP 342 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "David Valentine",
                 	"title": "Software Engineering",
                 	"code": "COMP 350 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "David Valentine",
                 	"title": "Software Engineering",
                 	"code": "COMP 350 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Brian Dickinson",
                 	"title": "Ios Programming",
                 	"code": "COMP 401 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Brian Dellinger",
                 	"title": "Intro to Algorithms",
                 	"code": "COMP 422 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["3 PM", "3:50 PM"],
                 		"T": [],
                 		"W": ["3 PM", "3:50 PM"],
                 		"R": [],
                 		"F": ["3 PM", "3:50 PM"]
                 	}
                 }, {
                 	"prof": "Jonathan Hutchins",
                 	"title": "Introduction to Machine Learning",
                 	"code": "COMP 435 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Brian Dellinger",
                 	"title": "2D Game Design & Development",
                 	"code": "COMP 441 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Brian Dickinson",
                 	"title": "Web Programming Technologies",
                 	"code": "COMP 442 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Brian Dickinson",
                 	"title": "Programming Languages",
                 	"code": "COMP 443 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Brian Dickinson",
                 	"title": "Programming Languages",
                 	"code": "COMP 443 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jonathan Hutchins",
                 	"title": "Intro to Artificial Intelligence",
                 	"code": "COMP 445 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["3 PM", "3:50 PM"],
                 		"T": [],
                 		"W": ["3 PM", "3:50 PM"],
                 		"R": [],
                 		"F": ["3 PM", "3:50 PM"]
                 	}
                 }, {
                 	"prof": "Brian Dellinger",
                 	"title": "3D Game Design & Development",
                 	"code": "COMP 446 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Lory Al Moakar",
                 	"title": "Computer Security",
                 	"code": "COMP 448 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Britton Wolfe",
                 	"title": "Senior Project 1",
                 	"code": "COMP 451 A",
                 	"term": "F20",
                 	"credits": 2,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Britton Wolfe",
                 	"title": "Senior Project 1",
                 	"code": "COMP 451 B",
                 	"term": "F20",
                 	"credits": 2,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Britton Wolfe",
                 	"title": "Senior Project 2",
                 	"code": "COMP 452 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Britton Wolfe",
                 	"title": "Senior Project 2",
                 	"code": "COMP 452 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Lory Al Moakar",
                 	"title": "Advanced Security",
                 	"code": "COMP 475 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Nathanael Mucha",
                 	"title": "Intro to Visual Comm Design",
                 	"code": "DESI 101 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Nathanael Mucha",
                 	"title": "Intro to Visual Comm Design",
                 	"code": "DESI 101 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Alexander Catanese",
                 	"title": "Design Thinking",
                 	"code": "DESI 102 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["6:30 PM", "9 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Nathanael Mucha",
                 	"title": "Visual Communication Design 1",
                 	"code": "DESI 201 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Nathanael Mucha",
                 	"title": "Visual Communication Design 2",
                 	"code": "DESI 202 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Nathanael Mucha",
                 	"title": "Interactive Design and User Exp",
                 	"code": "DESI 210 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["6:30 PM", "9 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Nathanael Mucha",
                 	"title": "Study: Design in Practice",
                 	"code": "DESI 390 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["6:30 PM", "9 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Nathanael Mucha",
                 	"title": "Study: Visual Comm Design 3",
                 	"code": "DESI 390 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Caleb Fuller",
                 	"title": "Prin of Economics-Micro",
                 	"code": "ECON 101 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Caleb Fuller",
                 	"title": "Prin of Economics-Micro",
                 	"code": "ECON 101 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Caleb Fuller",
                 	"title": "Prin of Economics-Micro",
                 	"code": "ECON 101 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Caleb Fuller",
                 	"title": "Prin of Economics-Micro",
                 	"code": "ECON 101 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Jeffrey Herbener",
                 	"title": "Prin of Economics-Macro",
                 	"code": "ECON 102 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jeffrey Herbener",
                 	"title": "Prin of Economics-Macro",
                 	"code": "ECON 102 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jeffrey Herbener",
                 	"title": "Prin of Economics-Macro",
                 	"code": "ECON 102 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jeffrey Herbener",
                 	"title": "Prin of Economics-Macro",
                 	"code": "ECON 102 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Shawn Ritenour",
                 	"title": "Foundations of Economics",
                 	"code": "ECON 120 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Shawn Ritenour",
                 	"title": "Foundations of Economics",
                 	"code": "ECON 120 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Shawn Ritenour",
                 	"title": "Foundations of Economics",
                 	"code": "ECON 120 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["3 PM", "3:50 PM"],
                 		"T": [],
                 		"W": ["3 PM", "3:50 PM"],
                 		"R": [],
                 		"F": ["3 PM", "3:50 PM"]
                 	}
                 }, {
                 	"prof": "Shawn Ritenour",
                 	"title": "Foundations of Economics",
                 	"code": "ECON 120 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["3 PM", "3:50 PM"],
                 		"T": [],
                 		"W": ["3 PM", "3:50 PM"],
                 		"R": [],
                 		"F": ["3 PM", "3:50 PM"]
                 	}
                 }, {
                 	"prof": "Shawn Ritenour",
                 	"title": "Econ Expans & Develop",
                 	"code": "ECON 202 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Caleb Fuller",
                 	"title": "Intermediate Microeconomics",
                 	"code": "ECON 301 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Shawn Ritenour",
                 	"title": "Intermediate Macroeconomics",
                 	"code": "ECON 302 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jeffrey Herbener",
                 	"title": "Austrian Economics",
                 	"code": "ECON 306 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Shawn Ritenour",
                 	"title": "Industrial Organization",
                 	"code": "ECON 310 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Caleb Fuller",
                 	"title": "Introduction to Econometrics",
                 	"code": "ECON 342 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Shawn Ritenour",
                 	"title": "Money & Banking",
                 	"code": "ECON 401 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Caleb Fuller",
                 	"title": "Law and Economics",
                 	"code": "ECON 402 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["6:30 PM", "9 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Caleb Fuller",
                 	"title": "Public Finance",
                 	"code": "ECON 404 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["6:30 PM", "9 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jeffrey Herbener",
                 	"title": "Economics Colloquium",
                 	"code": "ECON 420 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Jeffrey Herbener",
                 	"title": "Financial Markets and Institutions",
                 	"code": "ECON 456 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Jarrett Chapman",
                 	"title": "Intro to the Teaching Profession",
                 	"code": "EDUC 202 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jarrett Chapman",
                 	"title": "Intro to the Teaching Profession",
                 	"code": "EDUC 202 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jarrett Chapman",
                 	"title": "Intro to the Teaching Profession",
                 	"code": "EDUC 202 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Gina Blackburn",
                 	"title": "Culturally Relevant Pedagogy",
                 	"code": "EDUC 203 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Gina Blackburn",
                 	"title": "Culturally Relevant Pedagogy",
                 	"code": "EDUC 203 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Gina Blackburn",
                 	"title": "Culturally Relevant Pedagogy",
                 	"code": "EDUC 203 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Gina Blackburn",
                 	"title": "Culturally Relevant Pedagogy",
                 	"code": "EDUC 203 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Samantha Fecich",
                 	"title": "Technologies of Instruction",
                 	"code": "EDUC 204 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["8 AM", "8:50 AM"],
                 		"T": [],
                 		"W": ["8 AM", "8:50 AM"],
                 		"R": [],
                 		"F": ["8 AM", "8:50 AM"]
                 	}
                 }, {
                 	"prof": "Samantha Fecich",
                 	"title": "Technologies of Instruction",
                 	"code": "EDUC 204 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["8 AM", "8:50 AM"],
                 		"T": [],
                 		"W": ["8 AM", "8:50 AM"],
                 		"R": [],
                 		"F": ["8 AM", "8:50 AM"]
                 	}
                 }, {
                 	"prof": "Samantha Fecich",
                 	"title": "Technologies of Instruction",
                 	"code": "EDUC 204 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Samantha Fecich",
                 	"title": "Technologies of Instruction",
                 	"code": "EDUC 204 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Stacy Paparone",
                 	"title": "Elementary Music Pedagogy",
                 	"code": "EDUC 213 A",
                 	"term": "F20",
                 	"credits": 2,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Stacy Paparone",
                 	"title": "Middle Level Music Pedagogy",
                 	"code": "EDUC 214 A",
                 	"term": "S21",
                 	"credits": 2,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Sandra Herald",
                 	"title": "Adolescent Literature",
                 	"code": "EDUC 228 A",
                 	"term": "S21",
                 	"credits": 2,
                 	"time": {
                 		"M": ["3 PM", "3:50 PM"],
                 		"T": [],
                 		"W": ["3 PM", "3:50 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Gina Blackburn",
                 	"title": "Study: Cultural Diversity/Advocacy",
                 	"code": "EDUC 290 A",
                 	"term": "S21",
                 	"credits": 2,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "10:55 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "10:55 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jarrett Chapman",
                 	"title": "Study: Capturing the Covid-19 Gap",
                 	"code": "EDUC 290 B",
                 	"term": "S21",
                 	"credits": 2,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:40 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "John Stephens",
                 	"title": "Basic Prin Curriculum/Instruction",
                 	"code": "EDUC 305 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "John Stephens",
                 	"title": "Basic Prin Curriculum/Instruction",
                 	"code": "EDUC 305 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Gina Blackburn",
                 	"title": "Sec English Meth/Field Ex",
                 	"code": "EDUC 308 A",
                 	"term": "S21",
                 	"credits": 2,
                 	"time": {
                 		"M": ["3 PM", "4:40 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Christopher Omasits",
                 	"title": "Sec Science Meth/Field Ex",
                 	"code": "EDUC 309 A",
                 	"term": "S21",
                 	"credits": 2,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["6:30 PM", "8:10 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Daniel Nemeth",
                 	"title": "Sec Social Science Meth/Field Ex",
                 	"code": "EDUC 310 A",
                 	"term": "S21",
                 	"credits": 2,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["6:30 PM", "8:10 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Stacy Paparone",
                 	"title": "Secondary Choral Gen Musi Pedagogy",
                 	"code": "EDUC 313 A",
                 	"term": "F20",
                 	"credits": 2,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Stacy Paparone",
                 	"title": "Secondary Instrument Musi Pedagogy",
                 	"code": "EDUC 314 A",
                 	"term": "S21",
                 	"credits": 2,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "10:55 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "10:55 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Natalie Heisey",
                 	"title": "Teaching Primary & Elem Literacy",
                 	"code": "EDUC 323 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["8 AM", "8:50 AM"],
                 		"T": [],
                 		"W": ["8 AM", "8:50 AM"],
                 		"R": [],
                 		"F": ["8 AM", "8:50 AM"]
                 	}
                 }, {
                 	"prof": "Natalie Heisey",
                 	"title": "Teaching Primary & Elem Literacy",
                 	"code": "EDUC 323 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Natalie Heisey",
                 	"title": "Teaching Primary & Elem Literacy",
                 	"code": "EDUC 323 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Natalie Heisey",
                 	"title": "Teaching Primary & Elem Literacy",
                 	"code": "EDUC 323 C",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Susan Dreves",
                 	"title": "Teaching Elem Social Sciences",
                 	"code": "EDUC 324 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Susan Dreves",
                 	"title": "Teaching Elem Social Sciences",
                 	"code": "EDUC 324 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Susan Dreves",
                 	"title": "Teaching Elem Science/Health",
                 	"code": "EDUC 325 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Susan Dreves",
                 	"title": "Teaching Elem Science/Health",
                 	"code": "EDUC 325 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Constance Nichols",
                 	"title": "Teaching Upper Elem/Middle Literacy",
                 	"code": "EDUC 326 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Constance Nichols",
                 	"title": "Teaching Upper Elem/Middle Literacy",
                 	"code": "EDUC 326 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Constance Nichols",
                 	"title": "Teaching Upper Elem/Middle Literacy",
                 	"code": "EDUC 326 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Jolene Munson",
                 	"title": "Teaching Elem Math",
                 	"code": "EDUC 327 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jolene Munson",
                 	"title": "Teaching Elem Math",
                 	"code": "EDUC 327 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Linda Culbertson",
                 	"title": "Children'S Literature & Language",
                 	"code": "EDUC 328 A",
                 	"term": "F20",
                 	"credits": 2,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Natalie Heisey",
                 	"title": "Children'S Literature & Language",
                 	"code": "EDUC 328 A",
                 	"term": "S21",
                 	"credits": 2,
                 	"time": {
                 		"M": ["3 PM", "3:50 PM"],
                 		"T": [],
                 		"W": ["3 PM", "3:50 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jarrett Chapman",
                 	"title": "Middle Level Curriculum & Instruct",
                 	"code": "EDUC 329 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Gina Blackburn",
                 	"title": "Lit/Write For Sec Classroom",
                 	"code": "EDUC 330 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Elizabeth Rupnik",
                 	"title": "Early Childhood Curr & Instruct",
                 	"code": "EDUC 342 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Elizabeth Rupnik",
                 	"title": "Early Childhood Curr & Instruct",
                 	"code": "EDUC 342 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Constance Nichols",
                 	"title": "Trends/Issues in Early Child Educ",
                 	"code": "EDUC 343 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Constance Nichols",
                 	"title": "Trends/Issues in Early Child Educ",
                 	"code": "EDUC 343 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jarrett Chapman",
                 	"title": "Education For the Mission Field",
                 	"code": "EDUC 350 A",
                 	"term": "S21",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "John Stephens",
                 	"title": "Student Teaching-Secondary",
                 	"code": "EDUC 431 A",
                 	"term": "F20",
                 	"credits": 16,
                 	"time": {
                 		"M": ["4:30 PM", "6 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "John Stephens",
                 	"title": "Student Teaching-Secondary",
                 	"code": "EDUC 431 A",
                 	"term": "S21",
                 	"credits": 16,
                 	"time": {
                 		"M": ["4:30 PM", "6 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Stacy Paparone",
                 	"title": "Student Teaching-Elem Music",
                 	"code": "EDUC 435 A",
                 	"term": "F20",
                 	"credits": 8,
                 	"time": {
                 		"M": ["4 PM", "4:50 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Stacy Paparone",
                 	"title": "Student Teaching-Elem Music",
                 	"code": "EDUC 435 A",
                 	"term": "S21",
                 	"credits": 8,
                 	"time": {
                 		"M": ["4 PM", "4:50 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Stacy Paparone",
                 	"title": "Student Teaching-Secondary Music",
                 	"code": "EDUC 437 A",
                 	"term": "F20",
                 	"credits": 8,
                 	"time": {
                 		"M": ["4:50 PM", "5:40 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Stacy Paparone",
                 	"title": "Student Teaching-Secondary Music",
                 	"code": "EDUC 437 A",
                 	"term": "S21",
                 	"credits": 8,
                 	"time": {
                 		"M": ["4:50 PM", "5:40 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Linda Culbertson",
                 	"title": "Elem Student Tchg-Primary",
                 	"code": "EDUC 441 A",
                 	"term": "F20",
                 	"credits": 8,
                 	"time": {
                 		"M": ["3 PM", "3:50 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Linda Culbertson",
                 	"title": "Elem Student Tchg-Primary",
                 	"code": "EDUC 441 A",
                 	"term": "S21",
                 	"credits": 8,
                 	"time": {
                 		"M": ["3 PM", "3:50 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Linda Culbertson",
                 	"title": "Student Teaching Middle Level 1",
                 	"code": "EDUC 442 A",
                 	"term": "F20",
                 	"credits": 8,
                 	"time": {
                 		"M": ["3 PM", "3:50 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Linda Culbertson",
                 	"title": "Student Teaching Middle Level 1",
                 	"code": "EDUC 442 A",
                 	"term": "S21",
                 	"credits": 8,
                 	"time": {
                 		"M": ["3 PM", "5 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Linda Culbertson",
                 	"title": "Seminar: Issues in Education",
                 	"code": "EDUC 488 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Linda Culbertson",
                 	"title": "Seminar: Issues in Education",
                 	"code": "EDUC 488 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Linda Culbertson",
                 	"title": "Seminar: Issues in Education",
                 	"code": "EDUC 488 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Linda Culbertson",
                 	"title": "Seminar: Issues in Education",
                 	"code": "EDUC 488 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Timothy Mohr",
                 	"title": "Linear Circuits 1",
                 	"code": "ELEE 201 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "James Brooks",
                 	"title": "Linear Circuits 2",
                 	"code": "ELEE 202 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Timothy Mohr",
                 	"title": "Digital Logic Design",
                 	"code": "ELEE 204 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Timothy Mohr",
                 	"title": "Electrical Engineering",
                 	"code": "ELEE 210 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Timothy Mohr",
                 	"title": "Electrical Engineering",
                 	"code": "ELEE 210 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Timothy Mohr",
                 	"title": "Laboratory",
                 	"code": "ELEE 210 L",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": ["2 PM", "4 PM"]
                 	}
                 }, {
                 	"prof": "Timothy Mohr",
                 	"title": "Laboratory",
                 	"code": "ELEE 210 L",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": ["2 PM", "4 PM"]
                 	}
                 }, {
                 	"prof": "Luke Rumbaugh",
                 	"title": "Linear Circuits Laboratory",
                 	"code": "ELEE 251 L",
                 	"term": "F20",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": ["2 PM", "4:50 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Timothy Mohr",
                 	"title": "Digital Circuits Laboratory",
                 	"code": "ELEE 252 L",
                 	"term": "S21",
                 	"credits": 1,
                 	"time": {
                 		"M": ["2 PM", "4:50 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Alan Christman",
                 	"title": "Electronics 1",
                 	"code": "ELEE 301 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Alan Christman",
                 	"title": "Electronics 2",
                 	"code": "ELEE 302 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Alan Christman",
                 	"title": "Electrical Machines",
                 	"code": "ELEE 303 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Alan Christman",
                 	"title": "Electromagnetic Theory",
                 	"code": "ELEE 304 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Luke Rumbaugh",
                 	"title": "Microcontrollers With  Robotic Apps",
                 	"code": "ELEE 310 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Luke Rumbaugh",
                 	"title": "Embedded Syst Lab",
                 	"code": "ELEE 310 L",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "4:30 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Luke Rumbaugh",
                 	"title": "Signal Analysis",
                 	"code": "ELEE 321 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Alan Christman",
                 	"title": "Intermediate Laboratory 1",
                 	"code": "ELEE 351 L",
                 	"term": "F20",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["2 PM", "4:50 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Alan Christman",
                 	"title": "Intermediate Laboratory 2",
                 	"code": "ELEE 352 L",
                 	"term": "S21",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["2 PM", "4:50 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Myron Bright",
                 	"title": "Elec/Comp Engineering Design",
                 	"code": "ELEE 401 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["6:30 PM", "9 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Alan Christman",
                 	"title": "Electromag Energy Transmiss",
                 	"code": "ELEE 404 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "James Brooks",
                 	"title": "Control Theory",
                 	"code": "ELEE 421 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "James Brooks",
                 	"title": "Design of Control Syst",
                 	"code": "ELEE 422 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Luke Rumbaugh",
                 	"title": "Communication Systems 1",
                 	"code": "ELEE 431 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Luke Rumbaugh",
                 	"title": "Communication Systems 2",
                 	"code": "ELEE 432 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Myron Bright",
                 	"title": "Computer Architecture",
                 	"code": "ELEE 441 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Myron Bright",
                 	"title": "Parallel Computer Architecture",
                 	"code": "ELEE 442 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Luke Rumbaugh",
                 	"title": "Capstone Design Project 1",
                 	"code": "ELEE 451 L",
                 	"term": "F20",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["4 PM", "4:50 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "James Brooks",
                 	"title": "Capstone Design Project 1",
                 	"code": "ELEE 451 M",
                 	"term": "F20",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": ["4 PM", "4:50 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Luke Rumbaugh",
                 	"title": "Capstone Design Project 2",
                 	"code": "ELEE 452 L",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["3 PM", "4:50 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "James Brooks",
                 	"title": "Capstone Design Project 2",
                 	"code": "ELEE 452 M",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["3 PM", "4:50 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Joshua Mayo",
                 	"title": "Engl Lit Survey and Lit Studies 1",
                 	"code": "ENGL 201 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["8 AM", "8:50 AM"],
                 		"T": [],
                 		"W": ["8 AM", "8:50 AM"],
                 		"R": [],
                 		"F": ["8 AM", "8:50 AM"]
                 	}
                 }, {
                 	"prof": "Joshua Mayo",
                 	"title": "Engl Lit Survey and Lit Studies 1",
                 	"code": "ENGL 201 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Kristen Waha",
                 	"title": "Engl Lit Survey and Lit Studies 2",
                 	"code": "ENGL 202 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["8 AM", "8:50 AM"],
                 		"T": [],
                 		"W": ["8 AM", "8:50 AM"],
                 		"R": [],
                 		"F": ["8 AM", "8:50 AM"]
                 	}
                 }, {
                 	"prof": "Kristen Waha",
                 	"title": "Engl Lit Survey and Lit Studies 2",
                 	"code": "ENGL 202 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "H Messer",
                 	"title": "Amer Lit Survey 1",
                 	"code": "ENGL 203 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "H Messer",
                 	"title": "Amer Lit Survey 1",
                 	"code": "ENGL 203 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "H Messer",
                 	"title": "Amer Lit Survey 2",
                 	"code": "ENGL 204 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "H Messer",
                 	"title": "Amer Lit Survey 2",
                 	"code": "ENGL 204 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kristen Waha",
                 	"title": "World Lit Survey:Asia",
                 	"code": "ENGL 205 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Kristen Waha",
                 	"title": "World Lit:Africa/Latin America",
                 	"code": "ENGL 206 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Janice Brown",
                 	"title": "20Th C. English Novel",
                 	"code": "ENGL 243 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "H Messer",
                 	"title": "20Th C. American Novel",
                 	"code": "ENGL 246 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Betsy Craig",
                 	"title": "World Drama",
                 	"code": "ENGL 250 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Eric Potter",
                 	"title": "Modern Poetry",
                 	"code": "ENGL 262 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["3 PM", "3:50 PM"],
                 		"T": [],
                 		"W": ["3 PM", "3:50 PM"],
                 		"R": [],
                 		"F": ["3 PM", "3:50 PM"]
                 	}
                 }, {
                 	"prof": "Andrew Harvey",
                 	"title": "Classical Literature",
                 	"code": "ENGL 302 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Andrew Harvey",
                 	"title": "Eng Renaiss:Spencer to Milton",
                 	"code": "ENGL 306 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kristen Waha",
                 	"title": "Victorian Literature",
                 	"code": "ENGL 314 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Eric Potter",
                 	"title": "American Renaissance",
                 	"code": "ENGL 318 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Janice Brown",
                 	"title": "Christian Writers",
                 	"code": "ENGL 327 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Andrew Harvey",
                 	"title": "Shakespeare 1",
                 	"code": "ENGL 351 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["3 PM", "4:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Andrew Harvey",
                 	"title": "Shakespeare 2",
                 	"code": "ENGL 352 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["3 PM", "4:59 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Cynthia Philson",
                 	"title": "Grammar/Hist of English",
                 	"code": "ENGL 402 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["6:30 PM", "9 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "David Hogsette",
                 	"title": "Senior Capstone",
                 	"code": "ENGL 485 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Eric Potter",
                 	"title": "Senior Capstone",
                 	"code": "ENGL 485 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Richard Savage",
                 	"title": "Intro to Engineering",
                 	"code": "ENGR 156 A",
                 	"term": "F20",
                 	"credits": 2,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Myron Bright",
                 	"title": "Intro to Engineering",
                 	"code": "ENGR 156 A",
                 	"term": "S21",
                 	"credits": 2,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Myron Bright",
                 	"title": "Intro to Engineering",
                 	"code": "ENGR 156 B",
                 	"term": "S21",
                 	"credits": 2,
                 	"time": {
                 		"M": ["3 PM", "3:50 PM"],
                 		"T": [],
                 		"W": ["3 PM", "3:50 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Erik Anderson",
                 	"title": "Mathematical Methods in Engineering",
                 	"code": "ENGR 274 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Alan Christman",
                 	"title": "Mathematical Methods in Engineering",
                 	"code": "ENGR 274 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Myron Bright",
                 	"title": "Ethics in Engineering and Robotics",
                 	"code": "ENGR 301 A",
                 	"term": "F20",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": ["6:30 PM", "9 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Myron Bright",
                 	"title": "Ethics in Engineering and Robotics",
                 	"code": "ENGR 301 A",
                 	"term": "S21",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": ["6:30 PM", "9 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Joseph Augspurger",
                 	"title": "Separation Processes",
                 	"code": "ENGR 320 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["8 AM", "8:50 AM"],
                 		"T": [],
                 		"W": ["8 AM", "8:50 AM"],
                 		"R": [],
                 		"F": ["8 AM", "8:50 AM"]
                 	}
                 }, {
                 	"prof": "James Brooks",
                 	"title": "Study: Found of Systems Engineering",
                 	"code": "ENGR 390 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "James Brooks",
                 	"title": "Study: Systems Simulation",
                 	"code": "ENGR 390 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Richard Savage",
                 	"title": "Study: Bioengineering/Mems",
                 	"code": "ENGR 390 C",
                 	"term": "S21",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Luke Rumbaugh",
                 	"title": "Study: Introduction to Mechatronics",
                 	"code": "ENGR 390 D",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Erik Bardy",
                 	"title": "Engineering Economy",
                 	"code": "ENGR 402 A",
                 	"term": "S21",
                 	"credits": 1,
                 	"time": {
                 		"M": ["6:30 PM", "9 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Joseph Augspurger",
                 	"title": "Chemical Reaction Engineering",
                 	"code": "ENGR 420 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["8 AM", "8:50 AM"],
                 		"T": [],
                 		"W": ["8 AM", "8:50 AM"],
                 		"R": [],
                 		"F": ["8 AM", "8:50 AM"]
                 	}
                 }, {
                 	"prof": "Timothy Sweet",
                 	"title": "Entrepreneurial Mind:",
                 	"code": "ENTR 101 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Timothy Sweet",
                 	"title": "Entrepreneurial Mind:",
                 	"code": "ENTR 101 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Yvonne English",
                 	"title": "Technology For the Entrepreneur",
                 	"code": "ENTR 102 A",
                 	"term": "F20",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Yvonne English",
                 	"title": "Life Design Studio",
                 	"code": "ENTR 104 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["6:30 PM", "9 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Yvonne English",
                 	"title": "Lean Launchpad",
                 	"code": "ENTR 201 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["6:30 PM", "9 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Timothy Sweet",
                 	"title": "Sales in the Startup",
                 	"code": "ENTR 302 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Kenneth Smith",
                 	"title": "Law For Entreprenuers",
                 	"code": "ENTR 303 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Kenneth Smith",
                 	"title": "Ethics For the Entrepreneur",
                 	"code": "ENTR 306 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Kyle English",
                 	"title": "Social Entrepreneurship",
                 	"code": "ENTR 307 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Yvonne English",
                 	"title": "E-Commerce",
                 	"code": "ENTR 309 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kenneth Smith",
                 	"title": "Entr: Managing A Growing Enterprise",
                 	"code": "ENTR 312 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Timothy Sweet",
                 	"title": "Entrepreneurship: Mission of Church",
                 	"code": "ENTR 314 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Kenneth Smith",
                 	"title": "Entrepreneural Leadership",
                 	"code": "ENTR 319 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Cedric Lewis",
                 	"title": "Intro to the Business of Music",
                 	"code": "ENTR 326 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Timothy Sweet",
                 	"title": "Content Marketing",
                 	"code": "ENTR 328 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Timothy Sweet",
                 	"title": "Search Engine Optimization",
                 	"code": "ENTR 330 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Yvonne English",
                 	"title": "Digital Entrepreneurship",
                 	"code": "ENTR 409 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kenneth Smith",
                 	"title": "Family, Franchise, & Small Busa Mgt",
                 	"code": "ENTR 423 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "David Butler",
                 	"title": "Supply Chain Management",
                 	"code": "ENTR 424 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kenneth Smith",
                 	"title": "Entrepren Finance/Venture Capital",
                 	"code": "ENTR 430 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kenneth Smith",
                 	"title": "Business Planning",
                 	"code": "ENTR 466 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kenneth Smith",
                 	"title": "Corporate Innovation",
                 	"code": "ENTR 467 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Timothy Sweet",
                 	"title": "Seminar in Entrepreneurship",
                 	"code": "ENTR 488 A",
                 	"term": "S21",
                 	"credits": 1,
                 	"time": {
                 		"M": ["4 PM", "4:50 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Dana Ault",
                 	"title": "Introduction to Exercise Science",
                 	"code": "EXER 101 A",
                 	"term": "F20",
                 	"credits": 2,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Dana Ault",
                 	"title": "Introduction to Exercise Science",
                 	"code": "EXER 101 A",
                 	"term": "S21",
                 	"credits": 2,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Dana Ault",
                 	"title": "Introduction to Nutrition",
                 	"code": "EXER 134 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Dana Ault",
                 	"title": "Introduction to Nutrition",
                 	"code": "EXER 134 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "James Thrasher",
                 	"title": "Ethics in Sports",
                 	"code": "EXER 201 A",
                 	"term": "F20",
                 	"credits": 1,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Elaine Timko",
                 	"title": "Exercise and Sport Psychology",
                 	"code": "EXER 203 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "James Thrasher",
                 	"title": "Introduction to Sports Ministry",
                 	"code": "EXER 205 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "James Thrasher",
                 	"title": "Introduction to Sports Ministry",
                 	"code": "EXER 205 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Sean Severson",
                 	"title": "Wellness Promotion and Programming",
                 	"code": "EXER 220 A",
                 	"term": "F20",
                 	"credits": 2,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Andrew DiDonato",
                 	"title": "Personal Training",
                 	"code": "EXER 221 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Melissa Lamie",
                 	"title": "Phys Ed For Elementary Educators",
                 	"code": "EXER 228 A",
                 	"term": "F20",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Melissa Lamie",
                 	"title": "Phys Ed For Elementary Educators",
                 	"code": "EXER 228 A",
                 	"term": "S21",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jeffrey Buxton",
                 	"title": "Intro to Exercise Prog Design",
                 	"code": "EXER 230 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Jeffrey Buxton",
                 	"title": "Intro to Exercise Prog Design",
                 	"code": "EXER 230 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Adam Cook",
                 	"title": "Facility Management",
                 	"code": "EXER 235 A",
                 	"term": "S21",
                 	"credits": 2,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "10:55 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "10:55 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Philip Prins",
                 	"title": "Nutrition and Health",
                 	"code": "EXER 244 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Richard Patterson",
                 	"title": "Introduction to Athletic Training",
                 	"code": "EXER 249 A",
                 	"term": "F20",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": ["6:30 PM", "8:30 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Scott Wise",
                 	"title": "Introduction to Pt and Ot",
                 	"code": "EXER 250 A",
                 	"term": "S21",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": ["6:30 PM", "8:30 PM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Sean Severson",
                 	"title": "Prevention/Care of Injuries",
                 	"code": "EXER 251 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["8 AM", "8:50 AM"],
                 		"T": [],
                 		"W": ["8 AM", "8:50 AM"],
                 		"R": [],
                 		"F": ["8 AM", "8:50 AM"]
                 	}
                 }, {
                 	"prof": "Dana Ault",
                 	"title": "Anatomy and Physiology 1",
                 	"code": "EXER 253 A",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Dana Ault",
                 	"title": "Laboratory",
                 	"code": "EXER 253 L",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": ["10 AM", "11:29 AM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jeffrey Buxton",
                 	"title": "Laboratory",
                 	"code": "EXER 253 M",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": ["11:30 AM", "12:59 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Dana Ault",
                 	"title": "Nutrition in Sports & Exercise",
                 	"code": "EXER 254 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Philip Prins",
                 	"title": "Physiology of Exercise",
                 	"code": "EXER 256 A",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["8 AM", "8:50 AM"],
                 		"T": [],
                 		"W": ["8 AM", "8:50 AM"],
                 		"R": [],
                 		"F": ["8 AM", "8:50 AM"]
                 	}
                 }, {
                 	"prof": "Philip Prins",
                 	"title": "Physiology of Exercise",
                 	"code": "EXER 256 A",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["8 AM", "8:50 AM"],
                 		"T": [],
                 		"W": ["8 AM", "8:50 AM"],
                 		"R": [],
                 		"F": ["8 AM", "8:50 AM"]
                 	}
                 }, {
                 	"prof": "Philip Prins",
                 	"title": "Laboratory",
                 	"code": "EXER 256 L",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Philip Prins",
                 	"title": "Laboratory",
                 	"code": "EXER 256 L",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Philip Prins",
                 	"title": "Laboratory",
                 	"code": "EXER 256 M",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Philip Prins",
                 	"title": "Laboratory",
                 	"code": "EXER 256 M",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Philip Prins",
                 	"title": "Laboratory",
                 	"code": "EXER 256 N",
                 	"term": "F20",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Philip Prins",
                 	"title": "Laboratory",
                 	"code": "EXER 256 N",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Dana Ault",
                 	"title": "Anatomy and Physiology 2",
                 	"code": "EXER 258 A",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Dana Ault",
                 	"title": "Laboratory",
                 	"code": "EXER 258 L",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": [],
                 		"T": ["10 AM", "11:29 AM"],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jeffrey Buxton",
                 	"title": "Laboratory",
                 	"code": "EXER 258 M",
                 	"term": "S21",
                 	"credits": 0,
                 	"time": {
                 		"M": ["11 AM", "12:29 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Philip Prins",
                 	"title": "Exercise Testing",
                 	"code": "EXER 304 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Philip Prins",
                 	"title": "Exercise Testing",
                 	"code": "EXER 304 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Leslie Fuss",
                 	"title": "Basic Prin of Coaching",
                 	"code": "EXER 305 A",
                 	"term": "F20",
                 	"credits": 2,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Leslie Fuss",
                 	"title": "Basic Prin of Coaching",
                 	"code": "EXER 305 A",
                 	"term": "S21",
                 	"credits": 2,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Brenda Dolan",
                 	"title": "Exercise Leadership",
                 	"code": "EXER 306 A",
                 	"term": "S21",
                 	"credits": 2,
                 	"time": {
                 		"M": ["2 PM", "3:59 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Brenda Dolan",
                 	"title": "Exercise Leadership",
                 	"code": "EXER 306 B",
                 	"term": "S21",
                 	"credits": 2,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": ["8 AM", "9:59 AM"]
                 	}
                 }, {
                 	"prof": "Jeffrey Buxton",
                 	"title": "Exercise Prescription",
                 	"code": "EXER 307 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jeffrey Buxton",
                 	"title": "Biomechanics",
                 	"code": "EXER 309 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Jeffrey Buxton",
                 	"title": "Functional Kinesiology",
                 	"code": "EXER 310 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["8 AM", "8:50 AM"],
                 		"T": [],
                 		"W": ["8 AM", "8:50 AM"],
                 		"R": [],
                 		"F": ["8 AM", "8:50 AM"]
                 	}
                 }, {
                 	"prof": "Philip Prins",
                 	"title": "Clinical Exercise Physiology",
                 	"code": "EXER 312 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Dana Ault",
                 	"title": "Advanced Exercise Physiology",
                 	"code": "EXER 313 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Jeffrey Buxton",
                 	"title": "Research Methods in Exer Sci",
                 	"code": "EXER 377 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jeffrey Buxton",
                 	"title": "Certified Exercise Physiologist",
                 	"code": "EXER 402 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Caleb Thrasher",
                 	"title": "Principles of Strength & Condition",
                 	"code": "EXER 403 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Dana Ault",
                 	"title": "Prof. Certification/Seminar - Epc",
                 	"code": "EXER 404 A",
                 	"term": "S21",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Todd Gibson",
                 	"title": "Prof. Certification/Seminar - Cscs",
                 	"code": "EXER 404 B",
                 	"term": "F20",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Todd Gibson",
                 	"title": "Prof. Certification/Seminar - Cscs",
                 	"code": "EXER 404 B",
                 	"term": "S21",
                 	"credits": 1,
                 	"time": {
                 		"M": [],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Dana Ault",
                 	"title": "Research Practicum",
                 	"code": "EXER 407 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jeffrey Buxton",
                 	"title": "Research Practicum",
                 	"code": "EXER 407 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Richard Grimm",
                 	"title": "Principles of Finance",
                 	"code": "FNCE 301 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Richard Grimm",
                 	"title": "Principles of Finance",
                 	"code": "FNCE 301 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Richard Grimm",
                 	"title": "Principles of Finance",
                 	"code": "FNCE 301 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Richard Grimm",
                 	"title": "Principles of Finance",
                 	"code": "FNCE 301 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Youhui Zhang",
                 	"title": "Principles of Finance",
                 	"code": "FNCE 301 C",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Youhui Zhang",
                 	"title": "Principles of Finance",
                 	"code": "FNCE 301 C",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Youhui Zhang",
                 	"title": "Principles of Finance",
                 	"code": "FNCE 301 D",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Youhui Zhang",
                 	"title": "Investments",
                 	"code": "FNCE 332 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Youhui Zhang",
                 	"title": "Investments",
                 	"code": "FNCE 332 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["3 PM", "3:50 PM"],
                 		"T": [],
                 		"W": ["3 PM", "3:50 PM"],
                 		"R": [],
                 		"F": ["3 PM", "3:50 PM"]
                 	}
                 }, {
                 	"prof": "Richard Grimm",
                 	"title": "Investment Valuation",
                 	"code": "FNCE 334 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Youhui Zhang",
                 	"title": "Financial Modeling",
                 	"code": "FNCE 341 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:30 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:30 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Youhui Zhang",
                 	"title": "Financial Modeling",
                 	"code": "FNCE 341 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jeffrey Davidek",
                 	"title": "Financial Planning",
                 	"code": "FNCE 435 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["6:30 PM", "9 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Richard Grimm",
                 	"title": "Capital Markets",
                 	"code": "FNCE 436 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Richard Grimm",
                 	"title": "Advanced Corporate Finance",
                 	"code": "FNCE 440 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Richard Grimm",
                 	"title": "Advanced Corporate Finance",
                 	"code": "FNCE 440 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Youhui Zhang",
                 	"title": "International Finance",
                 	"code": "FNCE 462 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Rebecca Harmon",
                 	"title": "Elementary French 1",
                 	"code": "FREN 101 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Rebecca Harmon",
                 	"title": "Elementary French 1",
                 	"code": "FREN 101 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Rebecca Harmon",
                 	"title": "Elementary French 2",
                 	"code": "FREN 102 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Rebecca Harmon",
                 	"title": "Elementary French 2",
                 	"code": "FREN 102 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Kelsey Madsen",
                 	"title": "Intermediate French 1",
                 	"code": "FREN 201 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Kelsey Madsen",
                 	"title": "Intermediate French 1",
                 	"code": "FREN 201 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Kelsey Madsen",
                 	"title": "Intermediate French 2",
                 	"code": "FREN 202 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Kelsey Madsen",
                 	"title": "Intermediate French 2",
                 	"code": "FREN 202 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Kelsey Madsen",
                 	"title": "Understanding France and the French",
                 	"code": "FREN 301 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kelsey Madsen",
                 	"title": "French Composition and Style",
                 	"code": "FREN 307 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Rebecca Harmon",
                 	"title": "Applied Phonetics",
                 	"code": "FREN 308 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Kelsey Madsen",
                 	"title": "18Th Through 21St Century Fr Lit",
                 	"code": "FREN 321 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Rebecca Harmon",
                 	"title": "Poetry",
                 	"code": "FREN 331 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kelsey Madsen",
                 	"title": "Moments in French & Francophone His",
                 	"code": "FREN 340 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Karyn Senita",
                 	"title": "Aspects- Language Learning",
                 	"code": "FREN 362 A",
                 	"term": "S21",
                 	"credits": 2,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jarrett Chapman",
                 	"title": "Physical/ Environmental Geology",
                 	"code": "GEOL 201 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Darren Wood",
                 	"title": "Physical/ Environmental Geology",
                 	"code": "GEOL 201 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Thomas Gordon",
                 	"title": "Readings in New Test Greek 1",
                 	"code": "GREK 201 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Thomas Gordon",
                 	"title": "Readings in New Test Greek 2",
                 	"code": "GREK 202 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Julie Moeller",
                 	"title": "Introduction to Biblical Hebrew 1",
                 	"code": "HEBR 101 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Julie Moeller",
                 	"title": "Introduction to Biblical Hebrew 2",
                 	"code": "HEBR 102 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Andrew Mitchell",
                 	"title": "Freshman Seminar",
                 	"code": "HIST 103 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["8 AM", "8:50 AM"],
                 		"T": [],
                 		"W": ["8 AM", "8:50 AM"],
                 		"R": [],
                 		"F": ["8 AM", "8:50 AM"]
                 	}
                 }, {
                 	"prof": "Andrew Mitchell",
                 	"title": "World Geography",
                 	"code": "HIST 141 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Mark Graham",
                 	"title": "World History 1",
                 	"code": "HIST 143 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["8 AM", "8:50 AM"],
                 		"T": [],
                 		"W": ["8 AM", "8:50 AM"],
                 		"R": [],
                 		"F": ["8 AM", "8:50 AM"]
                 	}
                 }, {
                 	"prof": "Elizabeth Baker",
                 	"title": "World History 2",
                 	"code": "HIST 144 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Carl Trueman",
                 	"title": "Historiography",
                 	"code": "HIST 201 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jason Edwards",
                 	"title": "Hist/Phil Foundations of Education",
                 	"code": "HIST 204 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Jason Edwards",
                 	"title": "Hist/Phil Foundations of Education",
                 	"code": "HIST 204 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Elizabeth Baker",
                 	"title": "Modern Europe",
                 	"code": "HIST 212 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Jason Edwards",
                 	"title": "United States History Survey",
                 	"code": "HIST 253 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Gillis Harp",
                 	"title": "British Hist to 1781",
                 	"code": "HIST 261 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Elizabeth Baker",
                 	"title": "British Hist Since 1781",
                 	"code": "HIST 262 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Gillis Harp",
                 	"title": "History of Us to 1865",
                 	"code": "HIST 283 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Gillis Harp",
                 	"title": "History of U.S. Since 1865",
                 	"code": "HIST 285 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Elizabeth Baker",
                 	"title": "Study: Public History",
                 	"code": "HIST 290 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Caleb Verbois",
                 	"title": "Constitutional History U.S. 1",
                 	"code": "HIST 317 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Caleb Verbois",
                 	"title": "Constitutional History U.S. 2",
                 	"code": "HIST 318 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Andrew Mitchell",
                 	"title": "Global Military History 1",
                 	"code": "HIST 337 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Mark Graham",
                 	"title": "Byzantium & Islam",
                 	"code": "HIST 346 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Paul Kemeny",
                 	"title": "Amer Religious History",
                 	"code": "HIST 349 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Gillis Harp",
                 	"title": "Minorities in Amer Hist",
                 	"code": "HIST 357 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Mark Graham",
                 	"title": "Alexander the Great/Hellen World",
                 	"code": "HIST 376 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Andrew Mitchell",
                 	"title": "Food and Feasting, West Tradition",
                 	"code": "HIST 378 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Gillis Harp",
                 	"title": "Amer Intellectual Hist",
                 	"code": "HIST 379 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "4:30 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Andrew Mitchell",
                 	"title": "Study: History of Vietnam",
                 	"code": "HIST 390 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Andrew Mitchell",
                 	"title": "Study: History of Modern France",
                 	"code": "HIST 390 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Mark Graham",
                 	"title": "Senior Research Seminar",
                 	"code": "HIST 400 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "4:30 PM"],
                 		"T": [],
                 		"W": [],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jason Edwards",
                 	"title": "Seminar in Classical & Christian Ed",
                 	"code": "HIST 410 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Julie Moeller",
                 	"title": "Civ/Biblical Revelation",
                 	"code": "HUMA 102 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Julie Moeller",
                 	"title": "Civ/Biblical Revelation",
                 	"code": "HUMA 102 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Julie Moeller",
                 	"title": "Civ/Biblical Revelation",
                 	"code": "HUMA 102 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Julie Moeller",
                 	"title": "Civ/Biblical Revelation",
                 	"code": "HUMA 102 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "George Campbell",
                 	"title": "Civ/Biblical Revelation",
                 	"code": "HUMA 102 C",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "C Rine",
                 	"title": "Civ/Biblical Revelation",
                 	"code": "HUMA 102 C",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "George Campbell",
                 	"title": "Civ/Biblical Revelation",
                 	"code": "HUMA 102 D",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "George Campbell",
                 	"title": "Civ/Biblical Revelation",
                 	"code": "HUMA 102 D",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Donald Shepson",
                 	"title": "Civ/Biblical Revelation",
                 	"code": "HUMA 102 E",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Seulgi Byun",
                 	"title": "Civ/Biblical Revelation",
                 	"code": "HUMA 102 E",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Donald Shepson",
                 	"title": "Civ/Biblical Revelation",
                 	"code": "HUMA 102 F",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Seulgi Byun",
                 	"title": "Civ/Biblical Revelation",
                 	"code": "HUMA 102 F",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "George Campbell",
                 	"title": "Civ/Biblical Revelation",
                 	"code": "HUMA 102 G",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Donald Shepson",
                 	"title": "Civ/Biblical Revelation",
                 	"code": "HUMA 102 H",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Elizabeth Baker",
                 	"title": "Western Civ: Foundations",
                 	"code": "HUMA 200 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Andrew Mitchell",
                 	"title": "Western Civ: Foundations",
                 	"code": "HUMA 200 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Michael Coulter",
                 	"title": "Western Civ: Foundations",
                 	"code": "HUMA 200 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Elizabeth Baker",
                 	"title": "Western Civ: Foundations",
                 	"code": "HUMA 200 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Andrew Mitchell",
                 	"title": "Western Civ: Foundations",
                 	"code": "HUMA 200 C",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Elizabeth Baker",
                 	"title": "Western Civ: Foundations",
                 	"code": "HUMA 200 C",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Elizabeth Baker",
                 	"title": "Western Civ: Foundations",
                 	"code": "HUMA 200 D",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["3 PM", "3:50 PM"],
                 		"T": [],
                 		"W": ["3 PM", "3:50 PM"],
                 		"R": [],
                 		"F": ["3 PM", "3:50 PM"]
                 	}
                 }, {
                 	"prof": "Caleb Verbois",
                 	"title": "Western Civ: Foundations",
                 	"code": "HUMA 200 D",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["3 PM", "3:50 PM"],
                 		"T": [],
                 		"W": ["3 PM", "3:50 PM"],
                 		"R": [],
                 		"F": ["3 PM", "3:50 PM"]
                 	}
                 }, {
                 	"prof": "Mark Graham",
                 	"title": "Western Civ: Foundations",
                 	"code": "HUMA 200 E",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Mark Graham",
                 	"title": "Western Civ: Foundations",
                 	"code": "HUMA 200 E",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Caleb Verbois",
                 	"title": "Western Civ: Foundations",
                 	"code": "HUMA 200 F",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Jason Edwards",
                 	"title": "Western Civ: Foundations",
                 	"code": "HUMA 200 F",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Gillis Harp",
                 	"title": "Western Civ: Foundations",
                 	"code": "HUMA 200 G",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Gillis Harp",
                 	"title": "Western Civ: Foundations",
                 	"code": "HUMA 200 H",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Jason Edwards",
                 	"title": "Western Civ: Foundations",
                 	"code": "HUMA 200 1",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kristen Waha",
                 	"title": "Civ/Literature",
                 	"code": "HUMA 202 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Kristin Barbour",
                 	"title": "Civ/Literature",
                 	"code": "HUMA 202 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Adam Loretto",
                 	"title": "Civ/Literature",
                 	"code": "HUMA 202 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Kristin Barbour",
                 	"title": "Civ/Literature",
                 	"code": "HUMA 202 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Kristen Waha",
                 	"title": "Civ/Literature",
                 	"code": "HUMA 202 C",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Adam Loretto",
                 	"title": "Civ/Literature",
                 	"code": "HUMA 202 C",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kristen Waha",
                 	"title": "Civ/Literature",
                 	"code": "HUMA 202 D",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Janice Brown",
                 	"title": "Civ/Literature",
                 	"code": "HUMA 202 D",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Andrew Harvey",
                 	"title": "Civ/Literature",
                 	"code": "HUMA 202 E",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Adam Loretto",
                 	"title": "Civ/Literature",
                 	"code": "HUMA 202 E",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Andrew Harvey",
                 	"title": "Civ/Literature",
                 	"code": "HUMA 202 F",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kristin Barbour",
                 	"title": "Civ/Literature",
                 	"code": "HUMA 202 G",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kristin Barbour",
                 	"title": "Civ/Literature",
                 	"code": "HUMA 202 H",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Adam Loretto",
                 	"title": "Civ/Literature",
                 	"code": "HUMA 202 1",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Melva Huebert",
                 	"title": "Civ/The Arts",
                 	"code": "HUMA 301 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Beverly Carter",
                 	"title": "Civ/The Arts",
                 	"code": "HUMA 301 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Beverly Carter",
                 	"title": "Civ/The Arts",
                 	"code": "HUMA 301 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Beverly Carter",
                 	"title": "Civ/The Arts",
                 	"code": "HUMA 301 C",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Beverly Carter",
                 	"title": "Civ/The Arts",
                 	"code": "HUMA 301 D",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Beverly Carter",
                 	"title": "Civ/The Arts",
                 	"code": "HUMA 301 D",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Paul Munson",
                 	"title": "Civ/The Arts",
                 	"code": "HUMA 301 E",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["4 PM", "5:15 PM"],
                 		"T": [],
                 		"W": ["4 PM", "5:15 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Paul Munson",
                 	"title": "Civ/The Arts",
                 	"code": "HUMA 301 E",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["4 PM", "5:15 PM"],
                 		"T": [],
                 		"W": ["4 PM", "5:15 PM"],
                 		"R": [],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Paul Munson",
                 	"title": "Civ/The Arts",
                 	"code": "HUMA 301 F",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Paul Munson",
                 	"title": "Civ/The Arts",
                 	"code": "HUMA 301 F",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Paul Munson",
                 	"title": "Civ/The Arts",
                 	"code": "HUMA 301 G",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Paul Munson",
                 	"title": "Civ/The Arts",
                 	"code": "HUMA 301 G",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Carl Trueman",
                 	"title": "Christianity and Civilization",
                 	"code": "HUMA 303 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Paul Kemeny",
                 	"title": "Christianity and Civilization",
                 	"code": "HUMA 303 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Paul Schaefer",
                 	"title": "Christianity and Civilization",
                 	"code": "HUMA 303 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Carl Trueman",
                 	"title": "Christianity and Civilization",
                 	"code": "HUMA 303 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Paul Schaefer",
                 	"title": "Christianity and Civilization",
                 	"code": "HUMA 303 C",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Carl Trueman",
                 	"title": "Christianity and Civilization",
                 	"code": "HUMA 303 C",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Thomas Gordon",
                 	"title": "Christianity and Civilization",
                 	"code": "HUMA 303 D",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Ryan West",
                 	"title": "Christianity and Civilization",
                 	"code": "HUMA 303 D",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Thomas Gordon",
                 	"title": "Christianity and Civilization",
                 	"code": "HUMA 303 E",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Thomas Gordon",
                 	"title": "Christianity and Civilization",
                 	"code": "HUMA 303 E",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Thomas Gordon",
                 	"title": "Christianity and Civilization",
                 	"code": "HUMA 303 F",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Ryan West",
                 	"title": "Christianity and Civilization",
                 	"code": "HUMA 303 G",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Paul Schaefer",
                 	"title": "Christianity and Civilization",
                 	"code": "HUMA 303 H",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Paul Schaefer",
                 	"title": "Christianity and Civilization",
                 	"code": "HUMA 303 1",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Andrew Markley",
                 	"title": "Global Business Issues",
                 	"code": "INBS 305 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["8 AM", "8:50 AM"],
                 		"T": [],
                 		"W": ["8 AM", "8:50 AM"],
                 		"R": [],
                 		"F": ["8 AM", "8:50 AM"]
                 	}
                 }, {
                 	"prof": "Andrew Markley",
                 	"title": "Global Business Issues",
                 	"code": "INBS 305 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "David Butler",
                 	"title": "Global Business Issues",
                 	"code": "INBS 305 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "David Butler",
                 	"title": "Global Business Issues",
                 	"code": "INBS 305 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "David Butler",
                 	"title": "Global Business Issues",
                 	"code": "INBS 305 C",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "David Butler",
                 	"title": "Global Business Issues",
                 	"code": "INBS 305 C",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "David Butler",
                 	"title": "Global Supply Chains",
                 	"code": "INBS 417 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Andrew Markley",
                 	"title": "International Trade",
                 	"code": "INBS 445 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Mark Graham",
                 	"title": "Elementary Latin 1",
                 	"code": "LATN 101 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Mark Graham",
                 	"title": "Elementary Latin 2",
                 	"code": "LATN 102 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Laura Havrilla",
                 	"title": "Principles of Marketing",
                 	"code": "MARK 204 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Laura Havrilla",
                 	"title": "Principles of Marketing",
                 	"code": "MARK 204 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Laura Havrilla",
                 	"title": "Principles of Marketing",
                 	"code": "MARK 204 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Laura Havrilla",
                 	"title": "Principles of Marketing",
                 	"code": "MARK 204 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Scott Powell",
                 	"title": "Principles of Marketing",
                 	"code": "MARK 204 C",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Scott Powell",
                 	"title": "Principles of Marketing",
                 	"code": "MARK 204 C",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Scott Powell",
                 	"title": "Principles of Marketing",
                 	"code": "MARK 204 D",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["3 PM", "3:50 PM"],
                 		"T": [],
                 		"W": ["3 PM", "3:50 PM"],
                 		"R": [],
                 		"F": ["3 PM", "3:50 PM"]
                 	}
                 }, {
                 	"prof": "Richard Kocur",
                 	"title": "Digital Marketing",
                 	"code": "MARK 315 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Richard Kocur",
                 	"title": "Digital Marketing",
                 	"code": "MARK 315 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["8 AM", "9:15 AM"],
                 		"W": [],
                 		"R": ["8 AM", "9:15 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Timothy Sweet",
                 	"title": "Content Marketing",
                 	"code": "MARK 328 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Timothy Sweet",
                 	"title": "Search Engine Optimization",
                 	"code": "MARK 330 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Laura Havrilla",
                 	"title": "Marketing Research",
                 	"code": "MARK 411 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Laura Havrilla",
                 	"title": "Marketing Research",
                 	"code": "MARK 411 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Scott Powell",
                 	"title": "Retail Management",
                 	"code": "MARK 412 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Richard Kocur",
                 	"title": "Sales",
                 	"code": "MARK 414 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Laura Havrilla",
                 	"title": "Strategic Marketing",
                 	"code": "MARK 415 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Laura Havrilla",
                 	"title": "Strategic Marketing",
                 	"code": "MARK 415 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Scott Powell",
                 	"title": "Consumer Behavior",
                 	"code": "MARK 419 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Scott Powell",
                 	"title": "Consumer Behavior",
                 	"code": "MARK 419 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Scott Powell",
                 	"title": "Advertising",
                 	"code": "MARK 420 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["10:05 AM", "11:20 AM"],
                 		"W": [],
                 		"R": ["10:05 AM", "11:20 AM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Scott Powell",
                 	"title": "Advertising",
                 	"code": "MARK 420 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Dale McIntyre",
                 	"title": "College Algebra",
                 	"code": "MATH 110 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kelleen Bonomo",
                 	"title": "Pre Calculus",
                 	"code": "MATH 111 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["3 PM", "3:50 PM"],
                 		"T": [],
                 		"W": ["3 PM", "3:50 PM"],
                 		"R": [],
                 		"F": ["3 PM", "3:50 PM"]
                 	}
                 }, {
                 	"prof": "Ethan Smith",
                 	"title": "Pre Calculus",
                 	"code": "MATH 111 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Ethan Smith",
                 	"title": "Pre Calculus",
                 	"code": "MATH 111 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": [],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Dale McIntyre",
                 	"title": "Finite Math",
                 	"code": "MATH 118 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Dale McIntyre",
                 	"title": "Finite Math",
                 	"code": "MATH 118 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Kelleen Bonomo",
                 	"title": "Topics in Contemporary Mathematics",
                 	"code": "MATH 119 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Remi Drai",
                 	"title": "Business Calculus",
                 	"code": "MATH 141 A",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": ["11:30 AM", "12:20 PM"],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Remi Drai",
                 	"title": "Business Calculus",
                 	"code": "MATH 141 A",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": ["1 PM", "1:50 PM"],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Remi Drai",
                 	"title": "Business Calculus",
                 	"code": "MATH 141 B",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": ["11:30 AM", "12:20 PM"],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Kelleen Bonomo",
                 	"title": "Business Calculus",
                 	"code": "MATH 141 B",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["2 PM", "2:50 PM"],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": ["2 PM", "2:50 PM"],
                 		"R": [],
                 		"F": ["2 PM", "2:50 PM"]
                 	}
                 }, {
                 	"prof": "Kelleen Bonomo",
                 	"title": "Survey Mathematics 1",
                 	"code": "MATH 151 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Kelleen Bonomo",
                 	"title": "Survey Mathematics 1",
                 	"code": "MATH 151 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Kelleen Bonomo",
                 	"title": "Survey Mathematics 2",
                 	"code": "MATH 152 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Kelleen Bonomo",
                 	"title": "Survey Mathematics 2",
                 	"code": "MATH 152 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Eric Bancroft",
                 	"title": "Calculus 1",
                 	"code": "MATH 161 A",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["8 AM", "8:50 AM"],
                 		"T": [],
                 		"W": ["8 AM", "8:50 AM"],
                 		"R": ["8:25 AM", "9:15 AM"],
                 		"F": ["8 AM", "8:50 AM"]
                 	}
                 }, {
                 	"prof": "Steven Flanders",
                 	"title": "Calculus 1",
                 	"code": "MATH 161 A",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": ["1 PM", "1:50 PM"],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Gary Thompson",
                 	"title": "Calculus 1",
                 	"code": "MATH 161 B",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": [],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": ["10:05 AM", "10:55 AM"],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Steven Flanders",
                 	"title": "Calculus 1",
                 	"code": "MATH 161 B",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": [],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": ["1 PM", "1:50 PM"],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Gary Thompson",
                 	"title": "Calculus 1",
                 	"code": "MATH 161 C",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": ["10:05 AM", "10:55 AM"],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Steven Flanders",
                 	"title": "Calculus 1",
                 	"code": "MATH 161 D",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": ["11:30 AM", "12:20 PM"],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Steven Flanders",
                 	"title": "Calculus 1",
                 	"code": "MATH 161 E",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": ["1 PM", "1:50 PM"],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Michael Jackson",
                 	"title": "Calculus 2",
                 	"code": "MATH 162 A",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["9 AM", "9:50 AM"],
                 		"T": ["10:05 AM", "10:55 AM"],
                 		"W": ["9 AM", "9:50 AM"],
                 		"R": [],
                 		"F": ["9 AM", "9:50 AM"]
                 	}
                 }, {
                 	"prof": "Gary Thompson",
                 	"title": "Calculus 2",
                 	"code": "MATH 162 A",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["8 AM", "8:50 AM"],
                 		"T": [],
                 		"W": ["8 AM", "8:50 AM"],
                 		"R": ["8:25 AM", "9:15 AM"],
                 		"F": ["8 AM", "8:50 AM"]
                 	}
                 }, {
                 	"prof": "Michael Jackson",
                 	"title": "Calculus 2",
                 	"code": "MATH 162 B",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": ["10:05 AM", "10:55 AM"],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Steven Flanders",
                 	"title": "Calculus 2",
                 	"code": "MATH 162 B",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": ["10:05 AM", "10:55 AM"],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Gary Thompson",
                 	"title": "Calculus 2",
                 	"code": "MATH 162 C",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": ["11:30 AM", "12:20 PM"],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Gary Thompson",
                 	"title": "Calculus 2",
                 	"code": "MATH 162 D",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": ["1 PM", "1:50 PM"],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Steven Flanders",
                 	"title": "Statistical Methods",
                 	"code": "MATH 201 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Ethan Smith",
                 	"title": "Combinatorics",
                 	"code": "MATH 210 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["1 PM", "2:15 PM"],
                 		"W": [],
                 		"R": ["1 PM", "2:15 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Ethan Smith",
                 	"title": "Combinatorics",
                 	"code": "MATH 210 B",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["2:30 PM", "3:45 PM"],
                 		"W": [],
                 		"R": ["2:30 PM", "3:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Eric Bancroft",
                 	"title": "Discrete Math/Comp Sci",
                 	"code": "MATH 213 A",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": [],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": ["1 PM", "1:50 PM"],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Eric Bancroft",
                 	"title": "Discrete Math/Comp Sci",
                 	"code": "MATH 213 B",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": ["1 PM", "1:50 PM"],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Eric Bancroft",
                 	"title": "Applied Probablity and Linear Alg",
                 	"code": "MATH 214 A",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["1 PM", "1:50 PM"],
                 		"T": ["1 PM", "1:50 PM"],
                 		"W": ["1 PM", "1:50 PM"],
                 		"R": [],
                 		"F": ["1 PM", "1:50 PM"]
                 	}
                 }, {
                 	"prof": "Eric Bancroft",
                 	"title": "Applied Probablity and Linear Alg",
                 	"code": "MATH 214 B",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["3 PM", "3:50 PM"],
                 		"T": ["2:30 PM", "3:20 PM"],
                 		"W": ["3 PM", "3:50 PM"],
                 		"R": [],
                 		"F": ["3 PM", "3:50 PM"]
                 	}
                 }, {
                 	"prof": "Michael Jackson",
                 	"title": "Linear Algebra",
                 	"code": "MATH 222 A",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": ["10:05 AM", "10:55 AM"],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Michael Jackson",
                 	"title": "Linear Algebra",
                 	"code": "MATH 222 B",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": ["11:30 AM", "12:20 PM"],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Kelleen Bonomo",
                 	"title": "Survey of Mathematics 3",
                 	"code": "MATH 230 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": [],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": [],
                 		"R": ["11:30 AM", "12:45 PM"],
                 		"F": []
                 	}
                 }, {
                 	"prof": "Remi Drai",
                 	"title": "Financial Mathematics",
                 	"code": "MATH 232 A",
                 	"term": "F20",
                 	"credits": 3,
                 	"time": {
                 		"M": ["3 PM", "3:50 PM"],
                 		"T": [],
                 		"W": ["3 PM", "3:50 PM"],
                 		"R": [],
                 		"F": ["3 PM", "3:50 PM"]
                 	}
                 }, {
                 	"prof": "Ethan Smith",
                 	"title": "Calculus 3",
                 	"code": "MATH 261 A",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["12 PM", "12:50 PM"],
                 		"T": ["11:30 AM", "12:45 PM"],
                 		"W": ["12 PM", "12:50 PM"],
                 		"R": [],
                 		"F": ["12 PM", "12:50 PM"]
                 	}
                 }, {
                 	"prof": "Eric Bancroft",
                 	"title": "Calculus 3",
                 	"code": "MATH 261 A",
                 	"term": "S21",
                 	"credits": 4,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": ["10:05 AM", "10:55 AM"],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Ethan Smith",
                 	"title": "Calculus 3",
                 	"code": "MATH 261 B",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": ["11:30 AM", "12:20 PM"],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Dale McIntyre",
                 	"title": "Calculus 3",
                 	"code": "MATH 261 C",
                 	"term": "F20",
                 	"credits": 4,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": ["11:30 AM", "12:20 PM"],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }, {
                 	"prof": "Dale McIntyre",
                 	"title": "Differential Equations",
                 	"code": "MATH 262 A",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["10 AM", "10:50 AM"],
                 		"T": [],
                 		"W": ["10 AM", "10:50 AM"],
                 		"R": [],
                 		"F": ["10 AM", "10:50 AM"]
                 	}
                 }, {
                 	"prof": "Dale McIntyre",
                 	"title": "Differential Equations",
                 	"code": "MATH 262 B",
                 	"term": "S21",
                 	"credits": 3,
                 	"time": {
                 		"M": ["11 AM", "11:50 AM"],
                 		"T": [],
                 		"W": ["11 AM", "11:50 AM"],
                 		"R": [],
                 		"F": ["11 AM", "11:50 AM"]
                 	}
                 }
               ],
      term: "",
      title: "",
      prof: "",
      dept: "",
      min: 0,
      max: 488,
    };
    this.updatefilters = this.updatefilters.bind(this);
    this.searchedCourse = this.searchedCourse.bind(this);
  }



//  componentDidMount() {
//    fetch('http://localhost:8080/courses')
//    .then(response => {
//      if (response.ok) { return response.json(); }
//      else { return Promise.reject(response); }
//    })
//    .then(courseList => this.setState({ courses: courseList}))
//  }

  updatefilters(input) {
    if (input.target.name == "term") {
      this.setState({ term: (input.target.value == "Fall") ? "F20": "S21" })
    } else if (input.target.name == "course search") {
      this.setState({ title: input.target.value.toLowerCase() })
    } else if (input.target.name == "prof search") {
      this.setState({ prof: input.target.value.toLowerCase() })
    } else if (input.target.name == "min") {
      this.setState({ min: (input.target.value < 0) ? 0 : Math.floor(input.target.value )})
    } else if (input.target.name == "max") {
      this.setState({ max: (input.target.value > 488) ? 488 : input.target.value })
    } else if (input.target.name == "dept") {
      this.setState({ dept: input.target.value.toLowerCase() })
    }
  }

  searchedCourse(course) {
    let term = course.term == this.state.term || this.state.term == "";
    let title = course.title.toLowerCase().includes(this.state.title);
    let prof = course.prof.toLowerCase().includes(this.state.prof);
    let num = (
      () => {
        let code = course.code.split(" ")[1];
        if (this.state.min <= this.state.max) {
          return this.state.min <= code && this.state.max >= code;
        } else {
          return this.state.max <= code && this.state.min >= code;
        }
      }
    )()
    let dept = course.code.split(" ")[0].toLowerCase().includes(this.state.dept)
    return term && title && prof && num && dept;
  }
  greet() {
    console.log("hello world");
  }
  
  render() {
    let filtCourses = this.state.courses.filter(course => this.searchedCourse(course));
    console.log(filtCourses.length);
    return (
      <div className="Home">
        <h1 class = "pad">Scheduler Application </h1>
        <Dropdown/>
        <form action="/" method="get">
          <div>
            <label for="course-search">Search Courses: </label>
            <input 
            type = "text"
            id = "course-search"
            name = "course search"
            onChange = { this.updatefilters }/>
          </div>
          <div>
            <label for="prof-search">Search for a Professor: </label>
            <input 
            type = "text"
            id = "prof-search"
            name = "prof search"
            onChange = { this.updatefilters }/>
          </div>
          <div>
            <div>
                <input type = "radio" name = "term" value = "Fall" onInput={ this.updatefilters }></input>
                <label>Fall</label>
            </div>
            <div>
                <input type = "radio" name = "term" value = "Spring" onInput={ this.updatefilters }></input>
                <label>Spring</label>
            </div>
          </div>
          <div>
            <div>
              <label>Min: </label>
              <input type = "number" name = "min" min = "0" max = "488" onInput= { this.updatefilters }></input>
            </div>
            <div>
              <label>Max: </label>
              <input type = "number" name = "max" min = "0" max = "488" onInput= { this.updatefilters }></input>
            </div>
          </div>
          <div>
            <label>Department: </label>
            <input type = "text" name = "dept" onChange= { this.updatefilters }></input>
          </div>
        </form>
        <table>
          <thead>
            <tr>
              <td></td>
              <td>Term</td>
              <td>Code</td>
              <td>Section</td>
              <td>Title</td>
              <td>Professor</td>
              <td>Credits</td>
            </tr>
          </thead>
          <tbody>
            {filtCourses.map(course => {
              return (
              <tr>
                <td><button onClick={ this.greet }>Add</button></td>
                <td>{(course.term == "F20") ? "Fall" : "Spring"}</td>
                <td>{course.code.split(" ").slice(0,2).join(" ")}</td>
                <td>{course.code.split(" ")[2]}</td>
                <td>{course.title}</td>
                <td>{course.prof}</td>
                <td>{course.credits}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;