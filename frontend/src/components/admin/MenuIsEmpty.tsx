import { Stack, Typography } from "@mui/material";

export const EmptyMenu = () => {
  return (
    <Stack direction="column" alignItems="center">
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_198_4824"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="80"
          height="80"
        >
          <rect width="80" height="80" fill="#18BA51" />
        </mask>
        <g mask="url(#mask0_198_4824)">
          <path
            d="M36.6666 43.3337H16.6666V36.667H36.6666V16.667H43.3333V36.667H63.3333V43.3337H43.3333V63.3337H36.6666V43.3337Z"
            fill="#18BA51"
          />
        </g>
      </svg>
      <Typography variant="body1" sx={{ marginTop: "40px" }} color="gray">
        Уучлаарай, Таны меню хоосон байна.
      </Typography>
    </Stack>
  );
};
