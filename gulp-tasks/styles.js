"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";

import rename from "gulp-rename";
import sass from "gulp-sass";
import mincss from "gulp-clean-css";
import groupmedia from "gulp-group-css-media-queries";
import autoprefixer from "gulp-autoprefixer";
import sourcemaps from "gulp-sourcemaps";
import plumber from "gulp-plumber";
import browsersync from "browser-sync";
import debug from "gulp-debug";
import yargs from "yargs";
import touch from "gulp-touch-cmd";

const argv = yargs.argv,
    production = !!argv.production;

gulp.task("styles", () => {
    return gulp.src(paths.styles.src)
        .pipe( sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())
        .pipe(groupmedia())
        .pipe(autoprefixer({
            ignoreUnknownVersions: true,
            grid: "autoplace"
        }))
        .pipe(mincss({
            compatibility: "ie8", level: {
                1: {
                    specialComments: 0,
                    removeEmpty: true,
                    removeWhitespace: true
                },
                2: {
                    mergeMedia: true,
                    removeEmpty: true,
                    removeDuplicateFontRules: true,
                    removeDuplicateMediaBlocks: true,
                    removeDuplicateRules: true,
                    removeUnusedAtRules: false
                }
            }
        }))
        .pipe(plumber.stop())
        .pipe( sourcemaps.write("./maps/"))
        .pipe(gulp.dest(paths.styles.dist))
        .pipe(debug({
            "title": "CSS files"
        }))
        .pipe(browsersync.stream())
        .pipe(touch());
});