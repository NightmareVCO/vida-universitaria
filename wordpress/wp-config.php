<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'password1' );

/** Database hostname */
define( 'DB_HOST', 'db' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'zYVr4%xsQz30xn+w0.[!vh.1In9tQx[nWAU)fdqlSU^v^Tqe~:Cv+R!O]h+.dcT7' );
define( 'SECURE_AUTH_KEY',  'zsd<g5Vuxa!eY`4Ft[2+*5EspC}-ZK-|/p&4Z}-+Y4.gr4sO%{b|=^0Et;OUH.^l' );
define( 'LOGGED_IN_KEY',    'GcJ8xPB4i#}j-54:$!ZS!KhO_yF3dj||2!:addpwBWurMp8ThxtxQ{--=Db7wZoF' );
define( 'NONCE_KEY',        '{>[mmSdQc}eprn{C&rIUdH.!_j?~U>;A~0|LE)CK$L`S(w<,K>, Q6H=AUhd(Ta,' );
define( 'AUTH_SALT',        'CT:cuS_}`r8eI!?qp#dSK26+c*6nH=m2m*.5uu96WU@D(a~_h5E.FHES[WBfIzrQ' );
define( 'SECURE_AUTH_SALT', '7m^Xy+enJ.gmp&B5>z[4=gL,PNH+<~8G~fx>V`M&`BNRfDhklgC8#/4$wkPR4f#L' );
define( 'LOGGED_IN_SALT',   '[-FJ$}bTDq9XjNG)]:#AW ;]WCr_A!851I)khXyd2nSCz1KwZ0Yu-Xi@#cp,3=Xc' );
define( 'NONCE_SALT',       '[QN.(jhhBX I=i$qYeusZ^nt*zg/.94i?CND0ppd~eT_v|$-2#Xy-OCiQ331m;`1' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
