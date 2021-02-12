#!/usr/bin/env node
import { GetName } from '../cli.js';
import { EvenGame } from './brain-even';

console.log('Welcome to the Brain Games!');
GetName();
EvenGame();
