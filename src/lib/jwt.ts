import jwt from "jsonwebtoken";
const secretKey = process.env.SECRET_JWT as string;

export function encode(payload: {}): string {
  const token = jwt.sign(payload, secretKey, { expiresIn: "7d" });

  return token;
}

export function decode(token: string) {
  try {
    const decodedToken = jwt.verify(token, secretKey);
    return {
      success: true,
      data: decodedToken,
    };
  } catch (error) {
    return {
      success: false,
      data: error,
    };
  }
}
