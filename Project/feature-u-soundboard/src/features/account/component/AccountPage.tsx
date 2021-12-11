import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { Container, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { useFassets } from 'feature-u';

const AccountPage = () => {
  const { user } = useAuth0();
  const SoundContainer = useFassets('play.soundContainer');
  const SoundForm = useFassets('upload.form');
  const TTSForm = useFassets('tts.form');
  const FavoriteFilterContainer = useFassets('favoriteSound.FavoriteFilterContainer');
  const VoiceForm = useFassets('voice.form');

  const userInformation = [
    {
      key: 'Nickname',
      value: user.nickname,
    },
    {
      key: 'Email',
      value: user.email,
    },
    {
      key: 'Given name',
      value: user.given_name,
    },
    {
      key: 'Last name',
      value: user.family_name,
    },
  ];

  return (
    <Container sx={{ padding: '10px' }}>
      <h1>Account info</h1>
      {user.picture && <img src={user.picture} />}
      <Table sx={{ maxWidth: '40%' }}>
        <TableBody>
          {userInformation.map((row) => (
            <TableRow key={row.key}>
              <TableCell component="th" scope="row">
                {`${row.key}: `}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {TTSForm && <TTSForm />}
      {VoiceForm && <VoiceForm />}
      {SoundForm && <SoundForm />}
      {FavoriteFilterContainer ? (
        <FavoriteFilterContainer>
          <SoundContainer />
        </FavoriteFilterContainer>
      ) : (
        SoundContainer && <SoundContainer />
      )}
    </Container>
  );
};

const AccountPageWithProtection = withAuthenticationRequired(AccountPage, {});

export default AccountPageWithProtection;
