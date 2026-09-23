import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Backlog item 1: posts written for people looking for an already-equipped
  // room — not EventGear's customer. Merged into one article about bringing AV
  // into an ordinary room. See docs/content-restructure-plan.md.
  async redirects() {
    return [
      {
        source: "/blog/av-setup-for-conference-room-dayton",
        destination: "/blog/turn-any-room-into-meeting-room-for-a-day",
        permanent: true,
      },
      {
        source: "/blog/beavercreek-oh-meeting-space-av-equipment",
        destination: "/blog/turn-any-room-into-meeting-room-for-a-day",
        permanent: true,
      },
      {
        source: "/blog/boardroom-rental-trophy-club",
        destination: "/blog/turn-any-room-into-meeting-room-for-a-day",
        permanent: true,
      },
      {
        source: "/blog/conference-room-av-fort-worth",
        destination: "/blog/turn-any-room-into-meeting-room-for-a-day",
        permanent: true,
      },
      {
        source: "/blog/conference-room-solutions-pittsburgh",
        destination: "/blog/turn-any-room-into-meeting-room-for-a-day",
        permanent: true,
      },
      {
        source: "/blog/conference-space-trophy-club-tx",
        destination: "/blog/turn-any-room-into-meeting-room-for-a-day",
        permanent: true,
      },
      {
        source: "/blog/corporate-meeting-space-trophy-club",
        destination: "/blog/turn-any-room-into-meeting-room-for-a-day",
        permanent: true,
      },
      {
        source: "/blog/led-video-wall-setups-conference-rooms-boardrooms",
        destination: "/blog/turn-any-room-into-meeting-room-for-a-day",
        permanent: true,
      },
      {
        source: "/blog/meeting-room-av-equipment-levis-quebec",
        destination: "/blog/turn-any-room-into-meeting-room-for-a-day",
        permanent: true,
      },
      {
        source: "/blog/meeting-room-technology-fort-worth",
        destination: "/blog/turn-any-room-into-meeting-room-for-a-day",
        permanent: true,
      },
      {
        source: "/blog/meeting-rooms-av-equipment-burnaby",
        destination: "/blog/turn-any-room-into-meeting-room-for-a-day",
        permanent: true,
      },
      {
        source: "/blog/meeting-rooms-av-equipment-downtown-pittsburgh",
        destination: "/blog/turn-any-room-into-meeting-room-for-a-day",
        permanent: true,
      },
      {
        source: "/blog/meeting-rooms-av-equipment-emory-area-atlanta",
        destination: "/blog/turn-any-room-into-meeting-room-for-a-day",
        permanent: true,
      },
      {
        source: "/blog/meeting-rooms-av-equipment-trophy-club-texas",
        destination: "/blog/turn-any-room-into-meeting-room-for-a-day",
        permanent: true,
      },
      {
        source: "/blog/meeting-rooms-with-av-equipment-calgary-alberta",
        destination: "/blog/turn-any-room-into-meeting-room-for-a-day",
        permanent: true,
      },
      {
        source: "/blog/meeting-space-av-equipment-beavercreek-ohio",
        destination: "/blog/turn-any-room-into-meeting-room-for-a-day",
        permanent: true,
      },
      {
        source: "/blog/meeting-space-av-equipment-grand-prairie-tx",
        destination: "/blog/turn-any-room-into-meeting-room-for-a-day",
        permanent: true,
      },
      {
        source: "/blog/rent-conference-room-av-equipment-tech-support",
        destination: "/blog/turn-any-room-into-meeting-room-for-a-day",
        permanent: true,
      },
      {
        source: "/blog/rent-conference-room-trophy-club",
        destination: "/blog/turn-any-room-into-meeting-room-for-a-day",
        permanent: true,
      },
      {
        source: "/blog/shared-office-space-trophy-club",
        destination: "/blog/turn-any-room-into-meeting-room-for-a-day",
        permanent: true,
      },
      {
        source: "/blog/short-term-office-lease-trophy-club",
        destination: "/blog/turn-any-room-into-meeting-room-for-a-day",
        permanent: true,
      },
      {
        source: "/blog/small-meeting-room-trophy-club",
        destination: "/blog/turn-any-room-into-meeting-room-for-a-day",
        permanent: true,
      },
      // Backlog item 2: posts about finding a venue that already has AV —
      // merged into one article about bringing AV into venues built for
      // something else (restaurants, airport hotels, stadium suites).
      {
        source: "/blog/restaurants-with-private-rooms-and-av-equipment",
        destination: "/blog/av-for-venues-not-built-for-presentations",
        permanent: true,
      },
      {
        source: "/blog/conference-rooms-near-pdx-airport",
        destination: "/blog/av-for-venues-not-built-for-presentations",
        permanent: true,
      },
      {
        source: "/blog/dfw-airport-meeting-space",
        destination: "/blog/av-for-venues-not-built-for-presentations",
        permanent: true,
      },
      {
        source: "/blog/event-room-near-fort-worth-airport",
        destination: "/blog/av-for-venues-not-built-for-presentations",
        permanent: true,
      },
      {
        source: "/blog/meeting-rooms-av-equipment-near-fort-worth-airport",
        destination: "/blog/av-for-venues-not-built-for-presentations",
        permanent: true,
      },
      {
        source: "/blog/corporate-events-at-hgv-stadium-portland",
        destination: "/blog/av-for-venues-not-built-for-presentations",
        permanent: true,
      },
      {
        source: "/blog/easyas-hgv-stadium-meeting-rooms-capacity",
        destination: "/blog/av-for-venues-not-built-for-presentations",
        permanent: true,
      },
      {
        source: "/blog/event-rooms-with-av-equipment-conway-ar",
        destination: "/blog/av-for-venues-not-built-for-presentations",
        permanent: true,
      },
      {
        source: "/blog/event-venues-with-av-equipment-mount-kisco",
        destination: "/blog/av-for-venues-not-built-for-presentations",
        permanent: true,
      },
      {
        source: "/blog/meeting-space-av-equipment-fallsview-tourist-district",
        destination: "/blog/av-for-venues-not-built-for-presentations",
        permanent: true,
      },
      // Backlog item 3: posts about venues that advertise AV — merged into
      // one article about verifying what a venue covers and filling the gap.
      {
        source: "/blog/corporate-event-space-with-av-equipment",
        destination: "/blog/conference-center-audio-visual-equipment",
        permanent: true,
      },
      {
        source: "/blog/conference-venue-with-av-access-portland",
        destination: "/blog/conference-center-audio-visual-equipment",
        permanent: true,
      },
      {
        source: "/blog/meeting-venue-with-av-access-portland",
        destination: "/blog/conference-center-audio-visual-equipment",
        permanent: true,
      },
      {
        source: "/blog/conference-suites-equipment",
        destination: "/blog/conference-center-audio-visual-equipment",
        permanent: true,
      },
      {
        source: "/blog/pro-audio-vendors-hotel-resort-av-systems",
        destination: "/blog/conference-center-audio-visual-equipment",
        permanent: true,
      },
      {
        source: "/blog/pro-audio-equipment-suppliers-hotel-event-spaces",
        destination: "/blog/conference-center-audio-visual-equipment",
        permanent: true,
      },
      // Backlog item 4: five near-duplicate projector posts merged into one.
      {
        source: "/blog/projector-rentals-portland",
        destination: "/blog/projector-rental-portland",
        permanent: true,
      },
      {
        source: "/blog/projector-for-rent-portland",
        destination: "/blog/projector-rental-portland",
        permanent: true,
      },
      {
        source: "/blog/renting-a-projector-portland",
        destination: "/blog/projector-rental-portland",
        permanent: true,
      },
      {
        source: "/blog/renting-projectors-portland",
        destination: "/blog/projector-rental-portland",
        permanent: true,
      },
      {
        source: "/blog/large-venue-projector-rental-portland",
        destination: "/blog/projector-rental-portland",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
