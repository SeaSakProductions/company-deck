# Photo brief — what each direction needs

Every image on the mockups is a **slot**. Until a real photo exists it renders as a
faint CSS stand-in that suggests the tone and direction of light for that subject
(stage beams, dock light, house light) without pretending to be the picture.

## Dropping in a real photo

One line per slot, in that mockup's `<style>` block:

```css
.t1{ --img:url('photos/mainstage.jpg'); }        /* work wall, tile 1 */
.tw-side.l{ --img:url('photos/mainstage.jpg'); } /* two worlds, left half */
```

Optional: `--pos` sets the crop anchor (`--pos:50% 30%`) when the subject isn't
centered. The CSS stand-in hides itself automatically; the duotone brand wash stays
on top, so photos of mixed quality still read as one set.

## Shooting notes that apply everywhere

- **Dark frames win.** The site is near-black. Photos with deep shadow and one
  strong light source drop in cleanly; bright, evenly-lit frames fight the page.
- **Leave headroom.** Captions and kickers sit over the top-left and bottom edges.
- **Wide over tight.** Every slot crops to fill. A tight portrait loses its subject.
- **Landscape, 2000px on the long edge**, JPEG ~75%. Nothing here needs more.
- **People beat equipment.** A crew face on headset sells the pitch harder than an
  empty stage does.

## Per direction

### 1 — Two Worlds · 2 photos (+2 optional mobile crops)

| Slot | Subject | Crop |
|---|---|---|
| `.tw-side.l` | Festival main stage at night — crowd, truss, haze, warm wash | tall 1:2, subject in the outer third |
| `.tw-side.r` | Corporate general session — LED wall, seated room, cool light | tall 1:2, subject in the outer third |

Both are full-height halves, so the **center of each frame will be covered** by the
mark and headline. Choose shots whose subject lives left-of-center and right-of-center
respectively. On mobile they stack to two landscape halves — a 16:9 crop of each helps.

### 2 — The Work Wall · 7 photos

| Slot | Subject | Shape |
|---|---|---|
| `.t1` | Main stage, night — crowd + truss | tall |
| `.t2` | Trucks at dawn — dock, forklifts | tall |
| `.t3` | Stagehands on headset — build day | wide |
| `.t4` | General session — LED wall, keynote | wide |
| `.t5` | Gala ballroom — banquet, uplight, awards | tall |
| `.t6` | Expo floor — booth build | tall |
| `.t7` | Brand activation outdoors — daylight, public | very wide |

This direction is only as good as its weakest frame — all seven are on screen at once.
If two or three are soft, pick a different direction rather than shipping it thin.

### 3 — The Through-Line · 8 photos, 4:3, forgiving

Four stations, each cross-fading between a music and a corporate version of the same
moment. The pairs matter more than the individual frames — the point lands when the
two versions of a station are obviously the *same job* in different rooms.

| Station | Music | Corporate |
|---|---|---|
| Advance | Site walk, plans on a case lid | Venue walk, floor plan on a laptop |
| Load-In | Trucks at the dock | Cases down a hotel corridor |
| Show | Crowd from the deck at showtime | Full house from the back of room |
| Load-Out | Empty stage under work light | Ballroom stripped, carts staged |

Small on screen (~280px wide), so these are the most forgiving crops of any direction.

### 4 — Systems Board · 3 photos, very wide, low opacity

Backdrop only — they sit behind the board at ~50% opacity under a heavy vignette,
cycling every 7s. Atmosphere, not detail.

1. Festival main stage, night
2. Corporate general session
3. Expo floor or outdoor activation

Because they're this far back, **archive shots and phone photos are fine here.**
This is the direction to pick if the photo library is thin.

## Priority if you're only shooting once

Get the **Two Worlds pair** first — a festival night frame and a corporate general
session frame. Those two carry directions 1 and 4 outright, cover two of the eight
slots in direction 3, and are two of the seven in direction 2.
