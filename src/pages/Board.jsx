import React from "react";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import boardApi from '../api/boardApi'

const Board = () => {
  const { boardId } = useParams()
  console.log(boardId)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [sections, setSections] = useState([])
  const [isFavourite, setIsFavourite] = useState(false)
  const [icon, setIcon] = useState('')

  useEffect(() => {
    const getBoard = async () => {
      try {
        const res = await boardApi.getOne(boardId)
        setTitle(res.title)
        setDescription(res.description)
        setSections(res.sections)
        setIsFavourite(res.favourite)
        setIcon(res.icon)
      } catch (err) {
        alert(err)
      }
    }
    getBoard()
  }, [boardId])

  return <div>
    Board
  </div>;
};

export default Board;
