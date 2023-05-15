import {
  createGlobalThemeContract,
  createThemeContract,
} from "@vanilla-extract/css";
import { BASE_TOKENS } from "../tokens";

const baseVars = createGlobalThemeContract(BASE_TOKENS);

const neutralVars = createThemeContract({});
