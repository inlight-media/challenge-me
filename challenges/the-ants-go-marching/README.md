# The Ants Go Marching

I can’t get the song out of my head recently:

[The Ants Go Marching](https://www.youtube.com/watch?v=Pjw2A3QU8Qg)

So why not doing a code challenge about ants?

I found this code challenge online so please don’t google for the solutions.

It should be enjoyable if doing this challenge with the song as your BGM.

## Level

Easy.

## Description

An army of ants walk on a horizontal pole, each with a constant speed of 1 cm/s.

- When a walking ant reaches an end of the pole, it immediately falls off it.
- **When two ants meet they turn back and start walking in opposite directions.**

We know the original positions of ants on the pole, unfortunately, we do not know the directions in which the ants are walking.

Your task is to compute the earliest and the latest possible times needed for all ants to fall off the pole.

## Input

```
{
  poleLength: Int, // pole length in cm
  ants: Array<Int>, // the original positions of ants on the pole as the distance measured from the left end of the pole, in no particular order
}
```

All input integers are not bigger than 1000000.

## Output

```
{
  min: Int, // the earliest possible time in seconds when all ants fall off the pole
  max: Int, // the latest possible such time
}
```

## Examples

### Example one

#### Input

```
{
  poleLength: 10,
  ants: [2, 6, 7],
}
```

#### Output

```
{
  min: 4,
  max: 8
}
```

### Example two

#### Input

```
{
  poleLength: 214,
  ants: [11, 12, 7, 13, 176, 23, 191],
}
```

#### Output

```
{
  min: 38,
  max: 207
}
```
