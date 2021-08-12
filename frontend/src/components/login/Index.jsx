import React from 'react';

export default function Login (props) {

    return (
        <div style={styles.cont}>

            <form style={styles.formContainer}>
                <label>Usuário</label>
                <input type='text'/>
                <label>Senha: </label>
                <input type="password" />
                <button>Login</button>
            </form>

        </div>
    );
};

const styles = {
    formContainer: {
        backgroundColor: 'red',
        height: '300px',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '12px'
    },
    cont: {
        display: 'flex',
        alignItems: 'center',
    }
}