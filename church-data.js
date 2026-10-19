/* Church view: canonical place IDs join the existing artwork and pose data.
 * Official sources checked 19 October 2026; visit access can change for services.
 */
window.TRIP_CHURCHES = {
  cities: [
    {
      id: 'milan', label: 'Milano', places: [
        {
          id: 'duomo', name: 'Duomo di Milano', kind: 'cathedral',
          summary: 'Milan’s great cathedral is a place to pause for Christian worship as well as admire its Gothic architecture. Pair the cathedral with the archaeology below for the city’s earlier Christian story.',
          visitNote: 'For 19 October, recheck official access and ticket inclusions. Services take priority; choose a ticket explicitly including archaeology if you also want San Giovanni alle Fonti.',
          sourceUrl: 'https://www.duomomilano.it/en/access-updates-for-the-milan-duomo-monumental-complex/'
        },
        {
          id: 'san-giovanni-fonti', name: 'San Giovanni alle Fonti — baptistery remains', kind: 'archaeological site',
          summary: 'Ambrose baptised Augustine here in 387. The surviving baptistery remains beneath the Duomo reveal early Christian Milan; this is an archaeological visit, rather than an active church.',
          visitNote: 'For 19 October, check archaeological-area access and select a ticket that explicitly includes it. Do not assume a rooftop combination includes these remains.',
          sourceUrl: 'https://www.duomomilano.it/en/art-and-culture/archaeological-area/'
        },
        {
          id: 'sant-ambrogio', name: 'Basilica di Sant’Ambrogio', kind: 'basilica',
          summary: 'Founded by Ambrose, this basilica offers a quieter encounter with Milan’s Christian roots and the saint’s enduring spiritual legacy. Its brick atrium makes a memorable approach.',
          visitNote: 'A separate, free basilica visit from the Duomo archaeology. For Monday 19 October, the regular sightseeing windows are 10:00–12:00 and 14:30–18:00; recheck for liturgies and respect worshippers.',
          sourceUrl: 'https://www.basilicasantambrogio.it/basilica'
        },
        {
          id: 'san-lorenzo', name: 'San Lorenzo Maggiore', kind: 'basilica',
          summary: 'One of Milan’s oldest churches, San Lorenzo connects the city’s Roman past with its early Christian heritage. The ancient columns in front make an atmospheric first view.',
          visitNote: 'Use the exterior and columns as a flexible Milan stop. Check church access locally for 19 October before planning an interior visit; pause sightseeing during services.',
          sourceUrl: 'https://www.yesmilano.it/esplora/luoghi/basilica-di-san-lorenzo-maggiore'
        }
      ]
    },
    {
      id: 'venice', label: 'Venice', places: [
        {
          id: 'frari', name: 'Basilica dei Frari', kind: 'basilica',
          summary: 'A rewarding church stop in San Polo, combining a spacious sacred interior with time for quiet reflection. It fits naturally into the western Venice walk.',
          visitNote: 'For 24–26 October, consult the official visit calendar: special liturgies and concerts suspend sightseeing. Regular Sunday visits begin at 13:00; last entry is 30 minutes before closing. An entrance contribution applies.',
          sourceUrl: 'https://www.basilicadeifrari.it/orari-delle-visite/'
        },
        {
          id: 'st-marks', name: 'St Mark’s Basilica', kind: 'cathedral',
          summary: 'Make space for Venice’s central church as a place of living Christian worship. A service or prayer visit offers a different experience from the sightseeing route.',
          visitNote: 'For Sunday 25 October, regular tourist entry to the basilica starts at 14:00; check the official FAQ and service notices again. Prayer and service access is via Porta dei Fiori and must be used for worship; tourist tickets are separate.',
          sourceUrl: 'https://tickets.basilicasanmarco.it/en/support/faq'
        },
        {
          id: 'salute', name: 'Santa Maria della Salute', kind: 'basilica',
          summary: 'Built as a prayer and thanksgiving to Mary after Venice’s 1630 plague, the Salute gives the familiar waterfront dome a deeper Christian meaning. Its monumental exterior also rewards a Dorsoduro walk.',
          visitNote: 'For 24–26 October, recheck official church access before adding an interior visit. The smaller rotunda is reserved for prayer and celebrations; museum and sacristy visits have separate arrangements.',
          sourceUrl: 'https://basilicasalutevenezia.it/'
        },
        {
          id: 'san-giorgio-venice', name: 'San Giorgio Maggiore', kind: 'basilica',
          summary: 'An island basilica and abbey visit gives the Venice programme a quieter Christian setting across the water. Enjoy the church and waterfront as a gentle alternative to another busy attraction.',
          visitNote: 'For 24–26 October, recheck the abbey’s notices and respect services. The published church opening is 09:00–18:00; the bell tower is temporarily closed for extraordinary maintenance, with no reopening date announced.',
          sourceUrl: 'https://www.abbaziasangiorgio.it/'
        }
      ]
    },
    {
      id: 'varenna', label: 'Varenna', places: [
        {
          id: 'san-giorgio-varenna', name: 'Chiesa di San Giorgio', kind: 'church',
          summary: 'Consecrated in 1313, Varenna’s parish church preserves Lombard architecture and Christian frescoes. Its setting on Piazza San Giorgio makes a natural quiet pause above the lake.',
          visitNote: 'Allow a suggested 20–40 minutes for both square churches, with free visits when open. Recheck access for 22–23 October; enter only if open, and give services priority.',
          sourceUrl: 'https://varennaturismo.com/chiesa-di-san-giorgio/'
        },
        {
          id: 'san-giovanni-varenna', name: 'Chiesa di San Giovanni Battista', kind: 'church',
          summary: 'One of the oldest churches on Lake Como, San Giovanni Battista is Varenna’s mother church. Pair it with San Giorgio for a small, unhurried look at the village’s Christian history.',
          visitNote: 'Combine with nearby San Giorgio as a suggested 20–40-minute free pause. Interior access on 22–23 October is conditional on the church being open; check locally and respect any service.',
          sourceUrl: 'https://varennaturismo.com/chiesa-di-san-giovanni-battista/'
        }
      ]
    }
  ]
};
