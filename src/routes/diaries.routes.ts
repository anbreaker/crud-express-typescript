import express from 'express';
import {
  addDiary,
  findById,
  getEntriesWithoutSensitiveInfo,
} from '../controllers/diary.controller';

import { toNewDiaryEntry } from '../utils/utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(getEntriesWithoutSensitiveInfo());
});

router.get('/:id', (req, res) => {
  const diary = findById(+req.params.id);

  return diary ? res.send(diary) : res.sendStatus(404);
});

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);

    const addedDiaryEntry = addDiary(newDiaryEntry);

    res.json(addedDiaryEntry);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
});

export default router;

/*
http://localhost:3000/api/diaries

{
    "date":"2016-06-06",
    "weather": "sunndy",
    "visibility":"poor",
    "comment": "awesome dat"
}
*/
