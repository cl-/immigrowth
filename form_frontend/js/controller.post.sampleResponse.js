

// https://app.fwd.us/api/v1/legislators/search.json?zip=94102&district=&state=CA&party=R&key=f23fe9074cf280314359
//The Response for Get Legislators
{
  "legislators": [
    {
      "id": 586,
      "firstname": "Nancy",
      "middlename": "",
      "lastname": "Pelosi",
      "party": "D",
      "state": "CA",
      "district": "12",
      "in_office": "1",
      "gender": "F",
      "phone": "202-225-4965",
      "website": "http://pelosi.house.gov",
      "bioguide_id": "P000197",
      "twitter_id": "NancyPelosi",
      "action_points": 13866,
      "target_level": "low",
      "photo": "http://theunitedstates.io/images/congress/225x275/P000197.jpg",
      "chamber": "Rep",
      "immigration_stances": [
        {
          "issue": "Voted or Co-Sponsored a Comprehensive Immigration Reform Bill",
          "position": "Yes"
        }
      ],
      "overall_stance": "Supports"
    }
  ]
}


// https://app.fwd.us/api/v1/letters.json
//writing requires minimum length of 500 characters.

//The Response for Post Letter
"errors": {
  "street_address": "is too short (minimum is 5 characters)"
}
{
  "letter": {
    "id": 14204,
    "name": "qwe",
    "street_address": "qweqwe",
    "city": "qwe",
    "state": "CA",
    "zip": "12345",
    "email": "qwe@qwe.com",
    "writing": "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890",
    "legislator_id": 2,
    "shareable": false,
    "sent": null,
    "created_at": "2014-06-26T03:36:36.713Z",
    "updated_at": "2014-06-26T03:36:36.713Z"
  }
}


// https://app.fwd.us/api/v1/explorer
// Path: /api/v1/selfies.json
// Response Code: 422
{
  "selfie": {
    "id": null,
    "name": "test",
    "street_address": "test street",
    "city": "test",
    "state": "CA",
    "zip": "12345",
    "email": "test@test.com",
    "message": "Hello..Hello..Hello..Hello..Hello..",
    "uuid": null,
    "legislator_id": 1,
    "created_at": null,
    "updated_at": null,
    "status": "pending",
    "photo_url": "http://s3.amazonaws.com/fwd-rails/selfie_photos/basic//avatar-watermark.txt?1403753071"
  },
  "errors": {
    "message": "is too short (minimum is 40 characters)"
  }
}


// Path: /api/v1/selfies.json
// Response Code: 201
{
  "selfie": {
    "id": 6162,
    "name": "test",
    "street_address": "test street",
    "city": "test",
    "state": "CA",
    "zip": "12345",
    "email": "test@g.com",
    "message": "The staging.fwd.us explorer does not work...\nHave to test here.\n\nTest message. test message. test message.",
    "uuid": "d8bd5c4e68ba4c974f6cc7cc",
    "legislator_id": 1,
    "created_at": "2014-06-26T03:27:02.641Z",
    "updated_at": "2014-06-26T03:27:02.641Z",
    "status": "pending",
    "photo_url": "spinner_big.gif"
  }
}



