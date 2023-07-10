import React, { useState } from 'react'
import ListItem from '../listItem'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import './index.scss'

const ListComp = ({ users }) => {

  return (
    < TableContainer >
      <Table size='sm'>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>UserName</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((e) => {
            return (
              <Tr key={e.id}>
                <Td>{e.id}</Td>
                <Td>{e.name}</Td>
                <Td>{e.username}</Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}


export default ListComp